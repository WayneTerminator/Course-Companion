const courses = {
  mashie: {
    name: "San Lameer Mashie",
    details: "9 holes · All par 3s · Par 27",
    description: "The San Lameer Mashie is a compact 9-hole par-3 course that is ideal for quick rounds, sharpening short game skills, and relaxed social golf.",
    holes: [
      { hole: 1, distance: 70, par: 3, stroke: 7 },
      { hole: 2, distance: 82, par: 3, stroke: 8 },
      { hole: 3, distance: 96, par: 3, stroke: 3 },
      { hole: 4, distance: 86, par: 3, stroke: 5 },
      { hole: 5, distance: 134, par: 3, stroke: 1 },
      { hole: 6, distance: 90, par: 3, stroke: 4 },
      { hole: 7, distance: 104, par: 3, stroke: 2 },
      { hole: 8, distance: 58, par: 3, stroke: 9 },
      { hole: 9, distance: 78, par: 3, stroke: 6 }
    ]
  }
};

let selectedCourseKey = "mashie";
let course = courses[selectedCourseKey].holes;
let playerCount = 1;
let players = [{ name: "Wayne", scores: course.map(h => h.par) }];
let currentHole = 0;
let expandedScorePicker = null;

// Account / Supabase state
let supabaseClient = null;
let currentUser = null;
let cloudConfigured = false;
let cloudAvailable = false;

const homeScreen = document.getElementById("home-screen");
const courseDetailScreen = document.getElementById("course-detail-screen");
const setupScreen = document.getElementById("setup-screen");
const roundScreen = document.getElementById("round-screen");
const accountScreen = document.getElementById("account-screen");
const historyScreen = document.getElementById("history-screen");
const roundDetailScreen = document.getElementById("round-detail-screen");

let displayedHistoryRounds = [];
let displayedHistorySource = "local";

function showScreen(screen) {
  [homeScreen, courseDetailScreen, setupScreen, roundScreen, accountScreen, historyScreen, roundDetailScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function localRounds() {
  return JSON.parse(localStorage.getItem("courseCompanionRounds") || "[]");
}

function saveLocalRounds(rounds) {
  localStorage.setItem("courseCompanionRounds", JSON.stringify(rounds));
}

function ensureLocalId(round) {
  if (!round.localId) {
    round.localId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
  return round;
}

function updateAccountUI(message = "") {
  const pill = document.getElementById("account-status-pill");
  const statusTitle = document.getElementById("account-status-title");
  const statusMessage = document.getElementById("account-status-message");
  const signinPanel = document.getElementById("signin-panel");
  const signedinPanel = document.getElementById("signedin-panel");
  const signedinEmail = document.getElementById("signedin-email");
  const cloudConfigTitle = document.getElementById("cloud-config-title");
  const cloudConfigMessage = document.getElementById("cloud-config-message");

  if (!cloudConfigured) {
    pill.textContent = "Guest Mode";
    statusTitle.textContent = "Guest Mode";
    statusMessage.textContent = "Cloud sign-in is ready in the app, but Supabase keys have not been added yet.";
    signinPanel.style.display = "block";
    signedinPanel.style.display = "none";
    cloudConfigTitle.textContent = "Supabase not configured";
    cloudConfigMessage.textContent = "Add your Supabase Project URL and anon/public key in js/config.js to activate sign-in and cloud history.";
    document.getElementById("signin-helper").textContent = "Cloud is not configured yet. Guest scoring still works.";
    return;
  }

  cloudConfigTitle.textContent = "Supabase configured";
  cloudConfigMessage.textContent = "Cloud sign-in is enabled. Make sure the Supabase database schema has also been created.";

  if (currentUser) {
    pill.textContent = "Signed In";
    statusTitle.textContent = "Signed In";
    statusMessage.textContent = "Your account is connected. New rounds will be saved locally and also attempted in cloud history.";
    signinPanel.style.display = "none";
    signedinPanel.style.display = "block";
    signedinEmail.textContent = currentUser.email || "Signed in";
  } else {
    pill.textContent = "Guest Mode";
    statusTitle.textContent = "Guest Mode";
    statusMessage.textContent = "You can continue as a guest, or sign in to start using cloud history.";
    signinPanel.style.display = "block";
    signedinPanel.style.display = "none";
  }

  if (message) {
    document.getElementById("signin-helper").textContent = message;
    document.getElementById("sync-helper").textContent = message;
  }
}

async function initCloud() {
  cloudConfigured = typeof window.isCourseCompanionCloudConfigured === "function" && window.isCourseCompanionCloudConfigured();

  if (!cloudConfigured || !window.supabase) {
    updateAccountUI();
    return;
  }

  const cfg = window.COURSE_COMPANION_CONFIG;
  supabaseClient = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
  cloudAvailable = true;

  const { data } = await supabaseClient.auth.getSession();
  currentUser = data?.session?.user || null;

  supabaseClient.auth.onAuthStateChange((_event, session) => {
    currentUser = session?.user || null;
    updateAccountUI();
    updateHomeStats();
    renderHistory();
  });

  updateAccountUI();
}

async function sendMagicLink() {
  if (!cloudConfigured || !supabaseClient) {
    updateAccountUI("Cloud is not configured yet. Add Supabase keys in js/config.js first.");
    return;
  }

  const email = document.getElementById("signin-email").value.trim();
  if (!email) {
    updateAccountUI("Enter your email address first.");
    return;
  }

  const redirectTo = window.location.origin + window.location.pathname;

  const { error } = await supabaseClient.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: redirectTo }
  });

  if (error) {
    updateAccountUI(`Sign-in error: ${error.message}`);
    return;
  }

  updateAccountUI("Magic link sent. Check your email and open the link on this device.");
}

async function signOut() {
  if (!supabaseClient) return;
  await supabaseClient.auth.signOut();
  currentUser = null;
  updateAccountUI("Signed out. Guest scoring is still available.");
}

function roundToCloudRow(round) {
  return {
    local_id: round.localId,
    user_id: currentUser.id,
    played_at: round.date,
    player: round.player,
    course: round.course,
    course_handicap: round.courseHandicap,
    mashie_handicap: round.mashieHandicap,
    scores: round.scores,
    gross: round.gross,
    net: round.net,
    stableford: round.stableford
  };
}

function cloudRowToRound(row) {
  return {
    localId: row.local_id,
    date: row.played_at,
    player: row.player,
    course: row.course,
    courseHandicap: row.course_handicap,
    mashieHandicap: row.mashie_handicap,
    scores: row.scores,
    gross: row.gross,
    net: row.net,
    stableford: row.stableford
  };
}

async function saveRoundToCloud(round) {
  if (!cloudConfigured || !supabaseClient || !currentUser) return { ok: false, reason: "not signed in" };

  const { error } = await supabaseClient
    .from("rounds")
    .upsert(roundToCloudRow(round), { onConflict: "user_id,local_id" });

  if (error) return { ok: false, reason: error.message };
  return { ok: true };
}

async function loadCloudRounds() {
  if (!cloudConfigured || !supabaseClient || !currentUser) return null;

  const { data, error } = await supabaseClient
    .from("rounds")
    .select("*")
    .order("played_at", { ascending: false })
    .limit(100);

  if (error) {
    console.warn("Cloud history load failed:", error.message);
    updateAccountUI(`Cloud history issue: ${error.message}`);
    return null;
  }

  return data.map(cloudRowToRound);
}

async function syncLocalRounds() {
  if (!cloudConfigured || !supabaseClient || !currentUser) {
    updateAccountUI("Sign in before syncing local rounds.");
    return;
  }

  const rounds = localRounds().map(ensureLocalId);
  saveLocalRounds(rounds);

  let synced = 0;
  let failed = 0;

  for (const round of rounds) {
    const result = await saveRoundToCloud(round);
    if (result.ok) synced++;
    else failed++;
  }

  updateAccountUI(`Sync complete: ${synced} synced${failed ? `, ${failed} failed` : ""}.`);
  renderHistory();
}

function selectCourse(key) {
  if (key !== "mashie") {
    alert("Championship course is coming soon once we add the official scorecard data.");
    return;
  }

  selectedCourseKey = key;
  const selected = courses[key];
  course = selected.holes;

  document.getElementById("detail-course-name").textContent = selected.name;
  document.getElementById("detail-hero-title").textContent = selected.name;
  document.getElementById("detail-hero-subtitle").textContent = selected.details;
  document.getElementById("detail-description").textContent = selected.description;
  document.getElementById("setup-course-name").textContent = selected.name;
  document.getElementById("round-course-name").textContent = selected.name;

  renderCourseDistances();
  showScreen(courseDetailScreen);
}

function renderCourseDistances() {
  const container = document.getElementById("detail-hole-distances");
  container.innerHTML = course.map(hole => `
    <div class="hole-distance">
      <span>Hole ${hole.hole}</span>
      <strong>${hole.distance}m</strong>
    </div>
  `).join("");
}

function renderPlayerInputs() {
  const container = document.getElementById("player-inputs");
  container.innerHTML = "";
  for (let i = 0; i < playerCount; i++) {
    const defaultName = i === 0 ? "Wayne" : `Player ${i + 1}`;
    container.innerHTML += `
      <label>Player ${i + 1}</label>
      <input class="player-name-input" value="${players[i]?.name || defaultName}" data-player="${i}" />
    `;
  }

  document.querySelectorAll(".player-name-input").forEach(input => {
    input.addEventListener("input", () => {
      const index = Number(input.dataset.player);
      if (!players[index]) players[index] = { name: input.value, scores: course.map(h => h.par) };
      players[index].name = input.value || `Player ${index + 1}`;
    });
  });
}

function setPlayerCount(count) {
  playerCount = count;
  const oldPlayers = [...players];
  players = Array.from({ length: playerCount }, (_, i) => ({
    name: oldPlayers[i]?.name || (i === 0 ? "Wayne" : `Player ${i + 1}`),
    scores: oldPlayers[i]?.scores || course.map(h => h.par)
  }));

  document.querySelectorAll(".count-button").forEach(btn => {
    btn.classList.toggle("active", Number(btn.dataset.count) === playerCount);
  });

  renderPlayerInputs();
}

function mashieHandicap() {
  const courseHandicap = Number(document.getElementById("course-handicap").value || 0);
  return Math.round(courseHandicap / 2);
}

function handicapStrokes(strokeIndex) {
  const hcp = mashieHandicap();
  return (hcp >= strokeIndex ? 1 : 0) + (hcp >= strokeIndex + 9 ? 1 : 0);
}

function stablefordPoints(score, hole) {
  const net = score - handicapStrokes(hole.stroke);
  return Math.max(0, 2 + hole.par - net);
}

function resultLabel(score, par) {
  const diff = score - par;
  if (diff <= -1) return "Birdie";
  if (diff === 0) return "Par";
  if (diff === 1) return "Bogey";
  if (diff === 2) return "Double";
  return "Big number";
}

function normalScoreOptions(par) {
  if (par === 3) return [2, 3, 4, 5, "6+"];
  return [par - 1, par, par + 1, par + 2, `${par + 3}+`];
}

function expandedScoreOptions(par) {
  if (par === 3) return [6, 7, 8, 9, "10+"];
  return [par + 3, par + 4, par + 5, par + 6, `${par + 7}+`];
}

function playerTotals(player) {
  const gross = player.scores.reduce((a, b) => a + b, 0);
  const net = player.scores.reduce((total, score, index) => total + score - handicapStrokes(course[index].stroke), 0);
  const stableford = player.scores.reduce((total, score, index) => total + stablefordPoints(score, course[index]), 0);
  return { gross, net, stableford };
}

function isExpanded(playerIndex) {
  return expandedScorePicker === `${playerIndex}-${currentHole}`;
}

function renderCurrentHole() {
  const hole = course[currentHole];
  document.getElementById("hole-title").textContent = `Hole ${hole.hole}`;
  document.getElementById("hole-details").textContent = `${hole.distance}m · Par ${hole.par} · SI ${hole.stroke}`;
  document.getElementById("hole-number-badge").textContent = `${hole.hole} / ${course.length}`;

  const scoreArea = document.getElementById("players-score-area");
  scoreArea.innerHTML = players.map((player, playerIndex) => {
    const score = player.scores[currentHole];
    const net = score - handicapStrokes(hole.stroke);
    const points = stablefordPoints(score, hole);
    const options = isExpanded(playerIndex) ? expandedScoreOptions(hole.par) : normalScoreOptions(hole.par);
    const helperText = isExpanded(playerIndex) ? "Select exact score" : "Tap 6+ for higher scores";

    return `
      <section class="hole-card">
        <div class="player-header">
          <div>
            <div class="player-name">${player.name}</div>
            <div class="result-pill result-inline">${resultLabel(score, hole.par)}</div>
          </div>
          <div class="selected-score-display">
            <span>Score</span>
            <strong>${score}</strong>
          </div>
        </div>

        <p class="helper">${helperText}</p>

        <div class="score-buttons">
          ${options.map(option => {
            const isPlus = String(option).includes("+");
            const numericValue = parseInt(option, 10);
            const selected = score === numericValue || (isExpanded(playerIndex) && isPlus && score >= numericValue);
            return `
              <button
                class="score-button ${selected ? "selected" : ""}"
                onclick="${isPlus ? `handlePlusScore(${playerIndex}, ${numericValue})` : `setScore(${playerIndex}, ${numericValue})`}">
                ${option}
              </button>
            `;
          }).join("")}
        </div>

        <div class="hole-result">
          <span>HCP strokes: ${handicapStrokes(hole.stroke)}</span>
          <span>Net: ${net}</span>
          <span>Stableford: ${points}</span>
        </div>
      </section>
    `;
  }).join("");

  renderLiveSummary();
}

function renderLiveSummary() {
  const summary = document.getElementById("live-summary");
  summary.innerHTML = players.map(player => {
    const totals = playerTotals(player);
    return `
      <div class="summary-row">
        <strong>${player.name}</strong>
        <span>Gross ${totals.gross}</span>
        <span>Net ${totals.net}</span>
        <span>${totals.stableford} pts</span>
      </div>
    `;
  }).join("");
}

function setScore(playerIndex, score) {
  players[playerIndex].scores[currentHole] = score;
  expandedScorePicker = null;
  renderCurrentHole();
}

function handlePlusScore(playerIndex, minimumScore) {
  if (!isExpanded(playerIndex)) {
    expandedScorePicker = `${playerIndex}-${currentHole}`;
    renderCurrentHole();
    return;
  }

  const exact = prompt(`Enter exact score (${minimumScore} or higher):`, String(minimumScore));
  const parsed = Number(exact);

  if (Number.isInteger(parsed) && parsed >= minimumScore && parsed <= 20) {
    setScore(playerIndex, parsed);
  } else if (exact !== null) {
    alert(`Please enter a whole number from ${minimumScore} to 20.`);
  }
}

function startRound() {
  document.querySelectorAll(".player-name-input").forEach(input => {
    const index = Number(input.dataset.player);
    players[index].name = input.value || `Player ${index + 1}`;
  });

  players.forEach(player => {
    player.scores = course.map(h => h.par);
  });

  currentHole = 0;
  expandedScorePicker = null;
  renderCurrentHole();
  showScreen(roundScreen);
}

async function saveRound() {
  const rounds = localRounds();
  let cloudSaved = 0;
  let cloudFailed = 0;

  for (const player of players) {
    const totals = playerTotals(player);
    const round = ensureLocalId({
      date: new Date().toISOString(),
      player: player.name || "Player",
      course: courses[selectedCourseKey].name,
      courseHandicap: Number(document.getElementById("course-handicap").value || 0),
      mashieHandicap: mashieHandicap(),
      scores: [...player.scores],
      ...totals
    });

    rounds.push(round);

    const cloudResult = await saveRoundToCloud(round);
    if (cloudResult.ok) cloudSaved++;
    else if (currentUser) cloudFailed++;
  }

  saveLocalRounds(rounds);
  updateHomeStats();
  await renderHistory();

  if (currentUser && cloudSaved) {
    alert(`Round saved locally and to cloud.`);
  } else if (currentUser && cloudFailed) {
    alert(`Round saved locally. Cloud save needs setup or database check.`);
  } else {
    alert("Round saved locally.");
  }

  showScreen(homeScreen);
}

function resetScores() {
  if (!confirm("Reset all scores to par?")) return;
  players.forEach(player => player.scores = course.map(h => h.par));
  currentHole = 0;
  expandedScorePicker = null;
  renderCurrentHole();
}

function nextHole() {
  if (currentHole < course.length - 1) {
    currentHole++;
    expandedScorePicker = null;
    renderCurrentHole();
  } else {
    alert("That was the final hole. Tap Finish & Save Round when ready.");
  }
}

function previousHole() {
  if (currentHole > 0) {
    currentHole--;
    expandedScorePicker = null;
    renderCurrentHole();
  }
}


async function getHistoryData() {
  const local = localRounds().slice().reverse();

  if (cloudConfigured && supabaseClient && currentUser) {
    const cloudRounds = await loadCloudRounds();

    if (cloudRounds) {
      return {
        rounds: cloudRounds,
        source: "cloud",
        localCount: local.length,
        cloudCount: cloudRounds.length
      };
    }

    return {
      rounds: local,
      source: "local-fallback",
      localCount: local.length,
      cloudCount: null
    };
  }

  return {
    rounds: local,
    source: "local",
    localCount: local.length,
    cloudCount: null
  };
}

function setHistoryStatus(historyData) {
  const title = document.getElementById("history-source-title");
  const message = document.getElementById("history-source-message");
  const eyebrow = document.getElementById("history-source-eyebrow");

  if (!title || !message || !eyebrow) return;

  if (historyData.source === "cloud") {
    eyebrow.textContent = "Cloud History";
    title.textContent = currentUser?.email || "Signed in";
    message.textContent = `${historyData.cloudCount} cloud round${historyData.cloudCount === 1 ? "" : "s"} found. Local backup rounds on this device: ${historyData.localCount}.`;
    return;
  }

  if (historyData.source === "local-fallback") {
    eyebrow.textContent = "Local Backup";
    title.textContent = "Cloud unavailable";
    message.textContent = "Showing rounds saved on this device. Cloud history could not be loaded.";
    return;
  }

  eyebrow.textContent = "Guest History";
  title.textContent = "Local device history";
  message.textContent = "Sign in from the Account screen to use cloud history across devices.";
}

async function renderHistory() {
  const historyData = await getHistoryData();
  displayedHistoryRounds = historyData.rounds;
  displayedHistorySource = historyData.source;
  setHistoryStatus(historyData);

  const list = document.getElementById("history-list");

  if (!displayedHistoryRounds.length) {
    list.innerHTML = `
      <section class="history-item empty-history">
        <strong>No rounds saved yet.</strong><br>
        <span class="helper">Finish and save a round to build your history.</span>
      </section>
    `;
    return;
  }

  list.innerHTML = displayedHistoryRounds.map((round, index) => {
    const dateText = new Date(round.date).toLocaleDateString(undefined, {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });

    const sourceLabel = displayedHistorySource === "cloud" ? "Cloud" : "Local";

    return `
      <button class="history-card" onclick="openRoundDetail(${index})">
        <span class="history-card-top">
          <span>
            <strong>${round.player}</strong>
            <em>${round.course}</em>
          </span>
          <span class="history-badge">${sourceLabel}</span>
        </span>

        <span class="history-date">${dateText}</span>

        <span class="history-stats">
          <span>Gross <strong>${round.gross}</strong></span>
          <span>Net <strong>${round.net}</strong></span>
          <span>Pts <strong>${round.stableford}</strong></span>
        </span>

        <span class="history-open">Open round →</span>
      </button>
    `;
  }).join("");
}

function openRoundDetail(index) {
  const round = displayedHistoryRounds[index];
  if (!round) return;

  const dateText = new Date(round.date).toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  document.getElementById("round-detail-title").textContent = dateText;
  document.getElementById("round-detail-player").textContent = round.player;
  document.getElementById("round-detail-course").textContent = round.course;
  document.getElementById("round-detail-source").textContent = displayedHistorySource === "cloud" ? "Cloud Round" : "Local Round";
  document.getElementById("round-detail-gross").textContent = round.gross;
  document.getElementById("round-detail-net").textContent = round.net;
  document.getElementById("round-detail-stableford").textContent = round.stableford;
  document.getElementById("round-detail-date").textContent = dateText;

  const matchingCourse = Object.values(courses).find(c => c.name === round.course) || courses.mashie;

  document.getElementById("round-detail-scores").innerHTML = round.scores.map((score, index) => {
    const hole = matchingCourse.holes[index] || { hole: index + 1, par: 3, distance: "—", stroke: "—" };
    const label = resultLabel(score, hole.par);
    return `
      <div class="round-score-cell">
        <span>Hole ${hole.hole}</span>
        <strong>${score}</strong>
        <em>${label}</em>
      </div>
    `;
  }).join("");

  showScreen(roundDetailScreen);
}

async function updateHomeStats() {
  const historyData = await getHistoryData();
  const rounds = historyData.rounds;

  document.getElementById("rounds-count").textContent = rounds.length;

  if (!rounds.length) {
    document.getElementById("best-gross").textContent = "—";
    document.getElementById("best-stableford").textContent = "—";
    return;
  }

  document.getElementById("best-gross").textContent = Math.min(...rounds.map(r => r.gross));
  document.getElementById("best-stableford").textContent = Math.max(...rounds.map(r => r.stableford));
}


document.querySelectorAll(".course-tile").forEach(btn => {
  btn.addEventListener("click", () => selectCourse(btn.dataset.course));
});

document.querySelectorAll(".count-button").forEach(btn => {
  btn.addEventListener("click", () => setPlayerCount(Number(btn.dataset.count)));
});

document.getElementById("course-detail-back").addEventListener("click", () => showScreen(homeScreen));
document.getElementById("continue-to-setup").addEventListener("click", () => showScreen(setupScreen));
document.getElementById("setup-back").addEventListener("click", () => showScreen(courseDetailScreen));
document.getElementById("start-round").addEventListener("click", startRound);
document.getElementById("back-home").addEventListener("click", () => showScreen(homeScreen));
document.getElementById("account-button").addEventListener("click", () => {
  updateAccountUI();
  showScreen(accountScreen);
});
document.getElementById("account-back").addEventListener("click", () => showScreen(homeScreen));
document.getElementById("send-magic-link").addEventListener("click", sendMagicLink);
document.getElementById("sign-out-button").addEventListener("click", signOut);
document.getElementById("sync-local-rounds").addEventListener("click", syncLocalRounds);
document.getElementById("history-back").addEventListener("click", () => showScreen(homeScreen));
document.getElementById("round-detail-back").addEventListener("click", () => {
  renderHistory();
  showScreen(historyScreen);
});
document.getElementById("history-button").addEventListener("click", () => {
  renderHistory();
  showScreen(historyScreen);
});
document.getElementById("finish-round").addEventListener("click", saveRound);
document.getElementById("reset-round").addEventListener("click", resetScores);
document.getElementById("next-hole").addEventListener("click", nextHole);
document.getElementById("previous-hole").addEventListener("click", previousHole);

setPlayerCount(1);
renderCourseDistances();
initCloud();
updateHomeStats();
renderHistory();
