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

const homeScreen = document.getElementById("home-screen");
const courseDetailScreen = document.getElementById("course-detail-screen");
const setupScreen = document.getElementById("setup-screen");
const roundScreen = document.getElementById("round-screen");
const historyScreen = document.getElementById("history-screen");

function showScreen(screen) {
  [homeScreen, courseDetailScreen, setupScreen, roundScreen, historyScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
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
          <div class="player-name">${player.name}</div>
          <div class="result-pill">${resultLabel(score, hole.par)}</div>
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

function saveRound() {
  const rounds = JSON.parse(localStorage.getItem("courseCompanionRounds") || "[]");

  players.forEach(player => {
    const totals = playerTotals(player);
    rounds.push({
      date: new Date().toISOString(),
      player: player.name || "Player",
      course: courses[selectedCourseKey].name,
      courseHandicap: Number(document.getElementById("course-handicap").value || 0),
      mashieHandicap: mashieHandicap(),
      scores: [...player.scores],
      ...totals
    });
  });

  localStorage.setItem("courseCompanionRounds", JSON.stringify(rounds));
  updateHomeStats();
  renderHistory();
  alert("Round saved.");
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

function renderHistory() {
  const rounds = JSON.parse(localStorage.getItem("courseCompanionRounds") || "[]").reverse();
  const list = document.getElementById("history-list");

  if (!rounds.length) {
    list.innerHTML = `<section class="history-item">No rounds saved yet.</section>`;
    return;
  }

  list.innerHTML = rounds.map(round => `
    <section class="history-item">
      <strong>${round.player}</strong><br>
      ${new Date(round.date).toLocaleDateString()} · ${round.course}<br>
      Gross ${round.gross} · Net ${round.net} · Stableford ${round.stableford}<br>
      <span class="helper">Scores: ${round.scores.join("-")}</span>
    </section>
  `).join("");
}

function updateHomeStats() {
  const rounds = JSON.parse(localStorage.getItem("courseCompanionRounds") || "[]");
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
document.getElementById("history-back").addEventListener("click", () => showScreen(homeScreen));
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
updateHomeStats();
renderHistory();
