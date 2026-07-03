const courses = {
  mashie: {
    name: "San Lameer Mashie",
    details: "9 holes · All par 3s · Par 27",
    aboutTitle: "A quick, informal par-3 challenge",
    description: "The San Lameer Mashie is a compact 9-hole par-3 course that is ideal for quick rounds, sharpening short game skills, and relaxed social golf.",
    heroClass: "mashie-art-large",
    distanceUnit: "m",
    facts: [
      { label: "Holes", value: "9" },
      { label: "Par", value: "27" },
      { label: "Longest", value: "134m" },
      { label: "Shortest", value: "58m" }
    ],
    notes: [
      "Maximum group size: 4 players",
      "Players should start from Hole 1",
      "Mashie handicap: half your 18-hole course handicap",
      "No golf carts on the Mashie"
    ],
    handicapMode: "half",
    handicapHelper: "For the Mashie, Course Companion calculates your playing handicap as half of this.",
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
  },
  championship: {
    name: "San Lameer Championship",
    details: "18 holes · Par 72 · Club tees 5,816m",
    aboutTitle: "A full 18-hole championship round in the conservancy",
    description: "San Lameer's 18-hole championship course winds through glades, wetlands and forest in a wildlife-rich coastal conservancy. This playtest version loads the official par and stroke index, together with a practical club-tee distance set for live scoring.",
    heroClass: "championship-art-large",
    distanceUnit: "m",
    facts: [
      { label: "Holes", value: "18" },
      { label: "Par", value: "72" },
      { label: "Longest", value: "478m" },
      { label: "Shortest", value: "140m" }
    ],
    notes: [
      "Designed by Peter Matkovich and Dale Hayes",
      "Set through glades, forest and wetlands in a subtropical conservancy",
      "Uses your full 18-hole course handicap for scoring",
      "Club-tee distances loaded for this first Championship playtest"
    ],
    handicapMode: "full",
    handicapHelper: "For the Championship course, enter your full 18-hole course handicap.",
    holes: [
      { hole: 1, distance: 478, par: 5, stroke: 9 },
      { hole: 2, distance: 389, par: 4, stroke: 5 },
      { hole: 3, distance: 358, par: 4, stroke: 13 },
      { hole: 4, distance: 140, par: 3, stroke: 7 },
      { hole: 5, distance: 290, par: 4, stroke: 17 },
      { hole: 6, distance: 360, par: 4, stroke: 3 },
      { hole: 7, distance: 400, par: 4, stroke: 1 },
      { hole: 8, distance: 452, par: 5, stroke: 11 },
      { hole: 9, distance: 182, par: 3, stroke: 15 },
      { hole: 10, distance: 440, par: 5, stroke: 2 },
      { hole: 11, distance: 281, par: 4, stroke: 8 },
      { hole: 12, distance: 148, par: 3, stroke: 16 },
      { hole: 13, distance: 303, par: 4, stroke: 4 },
      { hole: 14, distance: 352, par: 4, stroke: 12 },
      { hole: 15, distance: 280, par: 4, stroke: 18 },
      { hole: 16, distance: 172, par: 3, stroke: 14 },
      { hole: 17, distance: 470, par: 5, stroke: 10 },
      { hole: 18, distance: 321, par: 4, stroke: 6 }
    ]
  },
  kokstad: {
    name: "Kokstad Golf Club",
    details: "18 holes · Par 72 · Blue tees 5,918yds",
    aboutTitle: "A scenic 18-hole course in Kokstad",
    description: "Kokstad Golf Club is an 18-hole KwaZulu-Natal course with scenic fairways, practice facilities and a welcoming clubhouse. This version uses the Hole19 blue-tee scorecard for live scoring.",
    heroClass: "kokstad-art-large",
    distanceUnit: "yds",
    facts: [
      { label: "Holes", value: "18" },
      { label: "Par", value: "72" },
      { label: "Total", value: "5,918yds" },
      { label: "Longest", value: "482yds" }
    ],
    notes: [
      "Blue tees loaded from Hole19",
      "Uses your full 18-hole course handicap for scoring",
      "Distances are shown in yards",
      "Good course to refine later with your own notes after play"
    ],
    handicapMode: "full",
    handicapHelper: "For Kokstad, enter your full 18-hole course handicap.",
    holes: [
      { hole: 1, distance: 429, par: 5, stroke: 17 },
      { hole: 2, distance: 375, par: 4, stroke: 9 },
      { hole: 3, distance: 372, par: 4, stroke: 1 },
      { hole: 4, distance: 382, par: 4, stroke: 3 },
      { hole: 5, distance: 466, par: 5, stroke: 15 },
      { hole: 6, distance: 340, par: 4, stroke: 7 },
      { hole: 7, distance: 161, par: 3, stroke: 11 },
      { hole: 8, distance: 331, par: 4, stroke: 5 },
      { hole: 9, distance: 177, par: 3, stroke: 13 },
      { hole: 10, distance: 458, par: 5, stroke: 14 },
      { hole: 11, distance: 338, par: 4, stroke: 10 },
      { hole: 12, distance: 168, par: 3, stroke: 8 },
      { hole: 13, distance: 317, par: 4, stroke: 6 },
      { hole: 14, distance: 482, par: 5, stroke: 12 },
      { hole: 15, distance: 271, par: 4, stroke: 18 },
      { hole: 16, distance: 141, par: 3, stroke: 16 },
      { hole: 17, distance: 350, par: 4, stroke: 4 },
      { hole: 18, distance: 360, par: 4, stroke: 2 }
    ]
  },
  margate: {
    name: "Margate Country Club",
    details: "18 holes · Par 71 · Blue tees 5,011m",
    aboutTitle: "A user-friendly but strategic coastal course",
    description: "Margate Country Club is described by the club as a picturesque, user-friendly course that is forgiving for newer golfers but still challenging in places. This version uses the club's blue-tee scorecard and adds short hole strategy notes from the course guide.",
    heroClass: "margate-art-large",
    distanceUnit: "m",
    facts: [
      { label: "Holes", value: "18" },
      { label: "Par", value: "71" },
      { label: "Total", value: "5,011m" },
      { label: "Longest", value: "408m" }
    ],
    notes: [
      "Blue tees loaded from the club scorecard",
      "Men's blue rating listed as CR 66.7 / Slope 120",
      "Uses your full 18-hole course handicap for scoring",
      "Hole notes included for live scoring strategy"
    ],
    handicapMode: "full",
    handicapHelper: "For Margate Country Club, enter your full 18-hole course handicap.",
    holes: [
      { hole: 1, distance: 305, par: 4, stroke: 3, note: "Demanding opener. Place the drive and avoid OB/penalty trouble left. Do not fly the green." },
      { hole: 2, distance: 120, par: 3, stroke: 7, note: "Par 3 with danger around the green. OB left, water right, bunkers around a two-tier green." },
      { hole: 3, distance: 330, par: 4, stroke: 5, note: "Longer slight dogleg right. Avoid right fairway bunkers and the penalty area left." },
      { hole: 4, distance: 126, par: 3, stroke: 13, note: "Short hole over water from elevation. Wind can make this play much longer." },
      { hole: 5, distance: 385, par: 5, stroke: 15, note: "Gradual uphill par 5. Avoid OB right and trees left; manage the second shot carefully." },
      { hole: 6, distance: 315, par: 4, stroke: 1, note: "Stroke 1 par 4. Favour the right side as the fairway slopes right-to-left." },
      { hole: 7, distance: 276, par: 4, stroke: 17, note: "Short dogleg left. Watch the fairway bunkers; a bump-and-run approach can work." },
      { hole: 8, distance: 149, par: 3, stroke: 11, note: "If missing the green, left is safer. Right brings trees and bunker trouble." },
      { hole: 9, distance: 386, par: 5, stroke: 9, note: "Drive is key. Water left, later OB left, and a fairway bunker right on the second." },
      { hole: 10, distance: 327, par: 4, stroke: 6, note: "Place the drive. Avoid OB/bunker right and water left; favour right on approach." },
      { hole: 11, distance: 94, par: 3, stroke: 8, note: "Signature par 3. Better long than short; water short and below the green." },
      { hole: 12, distance: 291, par: 4, stroke: 18, note: "Short dogleg right. Downhill slope feeds right where trees and OB wait." },
      { hole: 13, distance: 269, par: 4, stroke: 16, note: "Stay on the fairway. OB and bunker right; clear the grass bunker short of the green." },
      { hole: 14, distance: 324, par: 4, stroke: 4, note: "Downhill fairway with trees either side. Avoid overshooting the green." },
      { hole: 15, distance: 401, par: 5, stroke: 10, note: "Lay-up position matters. Do not miss the green left over the long greenside bunker." },
      { hole: 16, distance: 137, par: 3, stroke: 14, note: "Water left can matter in a southerly. Try to leave the ball below the hole." },
      { hole: 17, distance: 368, par: 4, stroke: 2, note: "Long dogleg right. Favour left from the tee and avoid running through the green." },
      { hole: 18, distance: 408, par: 5, stroke: 12, note: "Accurate tee shot needed. Water right/diagonal before an uphill finish to a two-tier green." }
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
const roundEditScreen = document.getElementById("round-edit-screen");

let displayedHistoryRounds = [];
let displayedHistorySource = "local";
let selectedDetailRound = null;
let editMode = "edit";
let editingRoundOriginal = null;

function showScreen(screen) {
  [homeScreen, courseDetailScreen, setupScreen, roundScreen, accountScreen, historyScreen, roundDetailScreen, roundEditScreen].forEach(s => s.classList.remove("active"));
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
    statusMessage.textContent = "You can continue as a guest, or sign in with an email link to use cloud history.";
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
  supabaseClient = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });
  cloudAvailable = true;

  const { data } = await supabaseClient.auth.getSession();
  currentUser = data?.session?.user || null;

  if (currentUser && (window.location.hash || window.location.search)) {
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  supabaseClient.auth.onAuthStateChange((_event, session) => {
    currentUser = session?.user || null;

    if (currentUser && (window.location.hash || window.location.search)) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    updateAccountUI(currentUser ? "Signed in successfully." : undefined);
    updateHomeStats();
    renderHistory();
  });

  updateAccountUI(currentUser ? "Signed in successfully." : undefined);
}

async function sendSignInLink() {
  if (!cloudConfigured || !supabaseClient) {
    updateAccountUI("Cloud is not configured yet. Add Supabase keys in js/config.js first.");
    return;
  }

  const email = document.getElementById("signin-email").value.trim();
  if (!email) {
    updateAccountUI("Enter your email address first.");
    return;
  }

  const redirectTo = "https://wayneterminator.github.io/Course-Companion/";

  const { error } = await supabaseClient.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: redirectTo,
      shouldCreateUser: true
    }
  });

  if (error) {
    updateAccountUI(`Sign-in error: ${error.message}`);
    return;
  }

  updateAccountUI("Sign-in link sent. Open the email link on this phone. It should return you to Course Companion.");
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
    mashie_handicap: round.playingHandicap ?? round.mashieHandicap,
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
    playingHandicap: row.mashie_handicap,
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

async function deleteRoundFromCloud(localId) {
  if (!cloudConfigured || !supabaseClient || !currentUser || !localId) return { ok: false, reason: "not signed in" };

  const { error } = await supabaseClient
    .from("rounds")
    .delete()
    .eq("user_id", currentUser.id)
    .eq("local_id", localId);

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
  selectedCourseKey = key;
  const selected = courses[key];
  course = selected.holes;

  document.getElementById("detail-course-name").textContent = selected.name;
  document.getElementById("detail-hero-title").textContent = selected.name;
  document.getElementById("detail-hero-subtitle").textContent = selected.details;
  document.getElementById("detail-description").textContent = selected.description;
  document.getElementById("detail-about-title").textContent = selected.aboutTitle;
  document.getElementById("setup-course-name").textContent = selected.name;
  document.getElementById("round-course-name").textContent = selected.name;
  document.getElementById("setup-handicap-helper").textContent = selected.handicapHelper;

  const hero = document.getElementById("detail-hero-image");
  hero.classList.remove("mashie-art-large", "championship-art-large", "kokstad-art-large", "margate-art-large");
  hero.classList.add(selected.heroClass);

  renderCourseFacts(selected);
  renderCourseNotes(selected);
  renderCourseDistances();
  setPlayerCount(playerCount);
  showScreen(courseDetailScreen);
}

function renderCourseFacts(selected = courses[selectedCourseKey]) {
  selected.facts.forEach((fact, index) => {
    const number = index + 1;
    document.getElementById(`detail-fact-${number}-label`).textContent = fact.label;
    document.getElementById(`detail-fact-${number}-value`).textContent = fact.value;
  });
}

function renderCourseNotes(selected = courses[selectedCourseKey]) {
  const container = document.getElementById("detail-note-list");
  container.innerHTML = selected.notes.map(note => `<div>${note}</div>`).join("");
}

function renderCourseDistances() {
  const container = document.getElementById("detail-hole-distances");
  container.innerHTML = course.map(hole => `
    <div class="hole-distance">
      <span>Hole ${hole.hole}</span>
      <strong>${hole.distance}${courses[selectedCourseKey].distanceUnit || "m"}</strong>
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
    scores: oldPlayers[i]?.scores && oldPlayers[i].scores.length === course.length ? oldPlayers[i].scores : course.map(h => h.par)
  }));

  document.querySelectorAll(".count-button").forEach(btn => {
    btn.classList.toggle("active", Number(btn.dataset.count) === playerCount);
  });

  renderPlayerInputs();
}

function playingHandicap() {
  const courseHandicap = Number(document.getElementById("course-handicap").value || 0);
  return courses[selectedCourseKey].handicapMode === "half" ? Math.round(courseHandicap / 2) : courseHandicap;
}

function handicapStrokes(strokeIndex) {
  const hcp = Math.max(0, playingHandicap());
  const holesInRound = course.length;
  const base = Math.floor(hcp / holesInRound);
  const remainder = hcp % holesInRound;
  return base + (strokeIndex <= remainder ? 1 : 0);
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
  document.getElementById("hole-details").textContent = `${hole.distance}${courses[selectedCourseKey].distanceUnit || "m"} · Par ${hole.par} · SI ${hole.stroke}`;
  document.getElementById("hole-number-badge").textContent = `${hole.hole} / ${course.length}`;
  const holeNote = document.getElementById("hole-strategy-note");
  if (holeNote) {
    holeNote.textContent = hole.note || "Score first. We can add detailed notes for this hole later.";
  }

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
      mashieHandicap: playingHandicap(),
      playingHandicap: playingHandicap(),
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

  selectedDetailRound = round;

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


function courseKeyFromName(courseName) {
  return Object.keys(courses).find(key => courses[key].name === courseName) || selectedCourseKey || "mashie";
}

function hcpForCourse(courseKey, courseHandicap) {
  const selected = courses[courseKey] || courses.mashie;
  const hcp = Number(courseHandicap || 0);
  return selected.handicapMode === "half" ? Math.round(hcp / 2) : hcp;
}

function strokesForCourse(courseKey, courseHandicap, strokeIndex) {
  const selected = courses[courseKey] || courses.mashie;
  const hcp = Math.max(0, hcpForCourse(courseKey, courseHandicap));
  const holesInRound = selected.holes.length;
  const base = Math.floor(hcp / holesInRound);
  const remainder = hcp % holesInRound;
  return base + (strokeIndex <= remainder ? 1 : 0);
}

function totalsForScores(courseKey, courseHandicap, scores) {
  const selected = courses[courseKey] || courses.mashie;
  const gross = scores.reduce((a, b) => a + b, 0);
  const net = scores.reduce((total, score, index) => {
    const hole = selected.holes[index];
    return total + score - strokesForCourse(courseKey, courseHandicap, hole.stroke);
  }, 0);
  const stableford = scores.reduce((total, score, index) => {
    const hole = selected.holes[index];
    const netScore = score - strokesForCourse(courseKey, courseHandicap, hole.stroke);
    return total + Math.max(0, 2 + hole.par - netScore);
  }, 0);

  return { gross, net, stableford };
}

function dateForInput(dateValue) {
  if (!dateValue) return new Date().toISOString().slice(0, 10);
  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.getTime())) return new Date().toISOString().slice(0, 10);
  return parsed.toISOString().slice(0, 10);
}

function dateFromInput(dateValue) {
  const value = dateValue || new Date().toISOString().slice(0, 10);
  return new Date(`${value}T12:00:00`).toISOString();
}

function ensureEditCourseOptions() {
  const select = document.getElementById("edit-course");
  select.innerHTML = Object.keys(courses).map(key => `<option value="${key}">${courses[key].name}</option>`).join("");
}

function scoresFromEditInputs() {
  const courseKey = document.getElementById("edit-course").value;
  const selected = courses[courseKey] || courses.mashie;
  return selected.holes.map((hole, index) => {
    const input = document.querySelector(`.edit-score-input[data-hole-index="${index}"]`);
    const value = Number(input?.value || hole.par);
    return Number.isInteger(value) && value > 0 ? value : hole.par;
  });
}

function renderEditScoreInputs(courseKey, scores = null) {
  const selected = courses[courseKey] || courses.mashie;
  const container = document.getElementById("edit-score-inputs");
  const scoreValues = scores && scores.length === selected.holes.length ? scores : selected.holes.map(h => h.par);

  container.innerHTML = selected.holes.map((hole, index) => `
    <div class="edit-score-row">
      <div>
        <strong>Hole ${hole.hole}</strong>
        <span>${hole.distance}${selected.distanceUnit || "m"} · Par ${hole.par} · SI ${hole.stroke}</span>
      </div>
      <input class="edit-score-input" data-hole-index="${index}" type="number" min="1" max="20" value="${scoreValues[index]}" />
    </div>
  `).join("");

  document.querySelectorAll(".edit-score-input").forEach(input => {
    input.addEventListener("input", updateEditSummary);
  });

  updateEditSummary();
}

function updateEditSummary() {
  const courseKey = document.getElementById("edit-course").value || selectedCourseKey;
  const courseHandicap = Number(document.getElementById("edit-handicap").value || 0);
  const scores = scoresFromEditInputs();
  const totals = totalsForScores(courseKey, courseHandicap, scores);

  document.getElementById("edit-summary-gross").textContent = totals.gross;
  document.getElementById("edit-summary-net").textContent = totals.net;
  document.getElementById("edit-summary-stableford").textContent = totals.stableford;
  document.getElementById("edit-summary-playing-hcp").textContent = hcpForCourse(courseKey, courseHandicap);
}

function openRoundEditor(round = null, mode = "edit") {
  editMode = mode;
  editingRoundOriginal = round;
  ensureEditCourseOptions();

  const courseKey = round ? courseKeyFromName(round.course) : selectedCourseKey;
  const selected = courses[courseKey] || courses.mashie;

  document.getElementById("round-edit-eyebrow").textContent = mode === "add" ? "Add Round" : "Edit Round";
  document.getElementById("round-edit-title").textContent = mode === "add" ? "Add Previous Round" : "Edit Saved Round";
  document.getElementById("round-edit-panel-title").textContent = mode === "add" ? "Enter previous round" : "Edit saved round";
  document.getElementById("edit-course").value = courseKey;
  document.getElementById("edit-date").value = dateForInput(round?.date);
  document.getElementById("edit-player").value = round?.player || "Wayne";
  document.getElementById("edit-handicap").value = round?.courseHandicap ?? document.getElementById("course-handicap").value ?? 30;
  document.getElementById("edit-handicap-helper").textContent = selected.handicapHelper;

  renderEditScoreInputs(courseKey, round?.scores);
  showScreen(roundEditScreen);
}

function makeRoundFromEditor() {
  const courseKey = document.getElementById("edit-course").value || "mashie";
  const selected = courses[courseKey] || courses.mashie;
  const courseHandicap = Number(document.getElementById("edit-handicap").value || 0);
  const scores = scoresFromEditInputs();
  const totals = totalsForScores(courseKey, courseHandicap, scores);

  return ensureLocalId({
    localId: editingRoundOriginal?.localId,
    date: dateFromInput(document.getElementById("edit-date").value),
    player: document.getElementById("edit-player").value.trim() || "Player",
    course: selected.name,
    courseKey,
    courseHandicap,
    mashieHandicap: hcpForCourse(courseKey, courseHandicap),
    playingHandicap: hcpForCourse(courseKey, courseHandicap),
    scores,
    ...totals
  });
}

function upsertLocalRound(round) {
  const rounds = localRounds().map(ensureLocalId);
  const index = rounds.findIndex(saved => saved.localId === round.localId);

  if (index >= 0) rounds[index] = round;
  else rounds.push(round);

  saveLocalRounds(rounds);
}

async function saveEditedRound() {
  const updatedRound = makeRoundFromEditor();
  upsertLocalRound(updatedRound);

  let cloudMessage = "";
  if (currentUser) {
    const result = await saveRoundToCloud(updatedRound);
    cloudMessage = result.ok ? " Saved to cloud." : ` Cloud save failed: ${result.reason}`;
  }

  selectedDetailRound = updatedRound;
  await renderHistory();
  updateHomeStats();
  alert(`${editMode === "add" ? "Round added" : "Round updated"}.${cloudMessage}`);
  showScreen(historyScreen);
}

async function deleteSelectedRound() {
  if (!selectedDetailRound) return;
  if (!confirm("Delete this round from your history?")) return;

  const localId = selectedDetailRound.localId;
  const remaining = localRounds().map(ensureLocalId).filter(round => round.localId !== localId);
  saveLocalRounds(remaining);

  let cloudMessage = "";
  if (currentUser && localId) {
    const result = await deleteRoundFromCloud(localId);
    cloudMessage = result.ok ? " Deleted from cloud." : ` Cloud delete failed: ${result.reason}`;
  }

  selectedDetailRound = null;
  await renderHistory();
  updateHomeStats();
  alert(`Round deleted.${cloudMessage}`);
  showScreen(historyScreen);
}

function handleEditCourseChange() {
  const courseKey = document.getElementById("edit-course").value;
  const selected = courses[courseKey] || courses.mashie;
  document.getElementById("edit-handicap-helper").textContent = selected.handicapHelper;
  renderEditScoreInputs(courseKey);
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
document.getElementById("send-signin-link").addEventListener("click", sendSignInLink);
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
document.getElementById("add-previous-round").addEventListener("click", () => openRoundEditor(null, "add"));
document.getElementById("edit-round-button").addEventListener("click", () => openRoundEditor(selectedDetailRound, "edit"));
document.getElementById("delete-round-button").addEventListener("click", deleteSelectedRound);
document.getElementById("round-edit-cancel").addEventListener("click", () => {
  if (selectedDetailRound) showScreen(roundDetailScreen);
  else showScreen(historyScreen);
});
document.getElementById("save-edited-round").addEventListener("click", saveEditedRound);
document.getElementById("edit-course").addEventListener("change", handleEditCourseChange);
document.getElementById("edit-handicap").addEventListener("input", updateEditSummary);
document.getElementById("finish-round").addEventListener("click", saveRound);
document.getElementById("reset-round").addEventListener("click", resetScores);
document.getElementById("next-hole").addEventListener("click", nextHole);
document.getElementById("previous-hole").addEventListener("click", previousHole);

setPlayerCount(1);
renderCourseFacts();
renderCourseNotes();
renderCourseDistances();
initCloud();
updateHomeStats();
renderHistory();
