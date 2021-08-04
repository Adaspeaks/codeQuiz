const viewHighScoreBtn = document.querySelector("#viewHighScore");
const timer = document.querySelector("#currentTime");
const currentScore = document.querySelector("#currentScore");
const starterSplash = document.querySelector("#starterSplash");
const startBtn = document.querySelector("#startBtn");
const killscreen = document.querySelector("#killScreen");
const submitHighScoreBtn = document.querySelector("#submitBtn");
const initialsForm = document.querySelector("#initials");
const initialsList = document.querySelector("#initialList");
const prevHighScore = document.querySelector("#prevHighscore");
const resetInitialsListBtn = document.querySelector("#resetInitialsList");
const homeBtn = document.querySelector("#home");
const questionTxt = document.querySelector("#questionText");
const answerBtns = document.querySelector("input[type=button]");
const q1 = document.querySelector(".question1");
const q2 = document.querySelector(".question2");
const q3 = document.querySelector(".question3");
const q4 = document.querySelector(".question4");
const q5 = document.querySelector(".question5");
const q6 = document.querySelector(".question6");
const q7 = document.querySelector(".question7");
const q8 = document.querySelector(".question8");
const q9 = document.querySelector(".question9");
const q10 = document.querySelector(".question10");

const isVisable = document.querySelector(".visable");

let state = "revealed";
let qi = 1;
let secondsLeft = 60;
let timerInterval = setInterval(startTimer, 1000);

const scoresArray = JSON.parse(localStorage.getItem("scoresArray"));
let prevScoresArray = [];

function startTimer() {
  if (starterSplash.className === "hidden") {
    secondsLeft--;
    timer.textContent = secondsLeft;
  }
  if (secondsLeft <= 0 || killscreen.className === "visable") {
    clearInterval(timerInterval);
    q1.setAttribute("class", "hidden");
    q2.setAttribute("class", "hidden");
    q3.setAttribute("class", "hidden");
    q4.setAttribute("class", "hidden");
    q5.setAttribute("class", "hidden");
    q6.setAttribute("class", "hidden");
    q7.setAttribute("class", "hidden");
    q8.setAttribute("class", "hidden");
    q9.setAttribute("class", "hidden");
    q10.setAttribute("class", "hidden");
    killscreen.setAttribute("class", "visable");
  }
}

function decreaseTimer() {
  secondsLeft = secondsLeft = 10;
  timer.textContent = secondsLeft;

  if (secondsLeft <= 0) {
    return;
  }
}

function checkAnswer() {
  if (this.id === "correct") {
    if (qi === 1) {
      document.querySelector("#right1").setAttribute("class", "visable");
    } else if (qi === 2) {
      document.querySelector("#right2").setAttribute("class", "visable");
    } else if (qi === 3) {
      document.querySelector("#right3").setAttribute("class", "visable");
    } else if (qi === 4) {
      document.querySelector("#right4").setAttribute("class", "visable");
    } else if (qi === 5) {
      document.querySelector("#right5").setAttribute("class", "visable");
    } else if (qi === 6) {
      document.querySelector("#right6").setAttribute("class", "visable");
    } else if (qi === 7) {
      document.querySelector("#right7").setAttribute("class", "visable");
    } else if (qi === 8) {
      document.querySelector("#right8").setAttribute("class", "visable");
    } else if (qi === 9) {
      document.querySelector("#right9").setAttribute("class", "visable");
    } else if (qi === 10) {
      document.querySelector("#right10").setAttribute("class", "visable");
    }
  } else {
    if (qi === 1) {
      document.querySelector("#wrong1").setAttribute("class", "visable");
      decreaseTimer();
    } else if (qi === 2) {
      document.querySelector("#wrong2").setAttribute("class", "visable");
      decreaseTimer();
    } else if (qi === 3) {
      document.querySelector("#wrong2").setAttribute("class", "visable");
      decreaseTimer();
    } else if (qi === 4) {
      document.querySelector("#wrong2").setAttribute("class", "visable");
      decreaseTimer();
    } else if (qi === 5) {
      document.querySelector("#wrong2").setAttribute("class", "visable");
      decreaseTimer();
    } else if (qi === 6) {
      document.querySelector("#wrong2").setAttribute("class", "visable");
      decreaseTimer();
    } else if (qi === 7) {
      document.querySelector("#wrong2").setAttribute("class", "visable");
      decreaseTimer();
    } else if (qi === 8) {
      document.querySelector("#wrong2").setAttribute("class", "visable");
      decreaseTimer();
    } else if (qi === 9) {
      document.querySelector("#wrong2").setAttribute("class", "visable");
      decreaseTimer();
    } else if (qi === 10) {
      document.querySelector("#wrong2").setAttribute("class", "visable");
      decreaseTimer();
    }
  }
  qi++;
}

function getHighScoreList() {
  starterSplash.setAttribute("class", "hidden");
  q1.setAttribute("class", "hidden");
  q2.setAttribute("class", "hidden");
  q3.setAttribute("class", "hidden");
  q4.setAttribute("class", "hidden");
  q5.setAttribute("class", "hidden");
  killscreen.setAttribute("class", "hidden");
}

function initialsAdd() {
  let listItem = document.createElement("li");
  initialsList.innerHTML = "HIGH SCORE";

  listItem.setAttribute(
    "style",
    "background-color: rgb(91, 39, 139); width: 300px; border-radius:10px; opacity: 80%; font-weight: bold; color: white "
  );
  initialsList.append(listItem);
  initialsList.append(initialsForm).value;
  listItem.append(" ====", timer);
}

function putScores() {
  if (initialsList.className === "visable") {
    let currentScore = {
      initials: document.querySelector(initialsForm).value,
      timeLeft: timerLeft,
    };

    if (localStorage.scoresArray != null) {
      prevScoresArray = JSON.parse(localStorage.getItem("scoresArray"));
      prevScoresArray.push(currentScore);
      localStorage.setItem("scoresArray", JSON.stringify(prevScoresArray));
    }
  }
}

function displayScores() {
  if (scoresArray !== null) {
    initialsList.innerHTML = "HIGH SCORES";
    initialsList.setAttribute("class", "visable");

    for (let i = 0; i < scoresArray.length; i++) {
      finalScore = scoresArray[i].initials + "====" + scoresArray[i].timeLeft;
      let scoreSlot = document.createElement("li");
      scoreSlot.textContent = finalScore;

      initialsList.append(scoreSlot);
    }
  } else return;
}

for (let i = 0; i < answerBtns.length; i++) {
  answerBtns[i].addEventListener("click", checkAnswer);
}
splashScreen.addEventListener("click", function (e) {
  e.preventDefault();

  if (state === "revealed") {
    state = "";
    start.setAttribute("class", "hide");
    q1.setAttribute("class", "visable");
  }
  startTimer();
});
killscreen.addEventListener("submit", function (e) {
  e.preventDefault();

  initialsAdd();

  if (state === "revealed") {
    state = "";
    killscreen.setAttribute("class", "hidden");
    initialsList.setAttribute("class", "visable");

    putScores();
    displayScores();
  }
});

viewHighScoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  getHighScoreList();
  initialsList.setAttribute("class", "hidden");
  clearInterval(timerInterval);
  displayScores();
});

homeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  location.reload();
});

resetInitialsListBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (localStorage !== null) {
    location.reload();
  }
  localStorage.clear();
});
