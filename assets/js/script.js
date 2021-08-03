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
const answerA = document.querySelector("#answerA");
const answerB = document.querySelector("#answerB");
const answerC = document.querySelector("#answerC");
const answerD = document.querySelector("#answerD");

const scoresArray = JSON.parse(localStorage.getItem("scoresArray"));
let prevScoresArray = [];

//array of questions to be pulled
// const questions = [
//     {
//         question:"Choose the 3rd option",
//         options:{answerA:"A: 3rd",answerB:"B: 3rd",answerC:"C: actually 3rd",answerD:"D: 4th"},
//         correct: "answerC"
//     },
//     {
//         question:"the answer is C",
//         options:{answerA:"A",answerB:"B",answerC:"C",answerD:"D"},
//         correct: "answerC"
//     },
//     {
//         question:"Like a standardized test, the answer is still C",
//         options:{answerA:"A",answerB:"B",answerC:"C",answerD:"D"},
//         correct: "answerC"
//     },
//     {
//         question:"I lied, the answer is D now",
//         options:{answerA:"A",answerB:"B",answerC:"C",answerD:"D"},
//         correct: "answerD"
//     },
//     {
//         question:"QUICK! What was the answer to the first question!?",
//         options:{answerA:"A",answerB:"B",answerC:"C",answerD:"D"},
//         correct: "answerC"
//     },
//     {
//         question:"See I told you the answer was always C",
//         options:{answerA:"A",answerB:"B",answerC:"C",answerD:"D"},
//         correct: "answerC"
//     },
//     {
//         question:"Allthough doing this may actually develop a pavlov response...",
//         options:{answerA:"A",answerB:"B",answerC:"C",answerD:"D"},
//         correct: "answerC"
//     },
//     {
//         question:"And that may not be good...",
//         options:{answerA:"A",answerB:"B",answerC:"C",answerD:"D"},
//         correct: "answerC"
//     },
//     {
//         question:"you know let's break the pattern choose A.",
//         options:{answerA:"A",answerB:"B",answerC:"C",answerD:"D"},
//         correct: "answerC"
//     },
//     {
//         question:"If you fell for it, I'm dissapointed and ashamed... choose C",
//         options:{answerA:"A",answerB:"B",answerC:"C",answerD:"D"},
//         correct: "answerC"
//     }
// ];
function initialsAdd(){
    let listItem = document.createElement("li");
    initialsList.innerHTML = "HIGH SCORE";

    listItem.setAttribute("style", "background-color: rgb(91, 39, 139); width: 300px; border-radius:10px; opacity: 80%; font-weight: bold; color: white ")
    initialsList.append(listItem);
    initialsList.append(initialsForm).value;
    listItem.append(" ====",timer)
};

function putScores(){
    if(initialsList.className !== "hidden") {
        let currentScore = {
            initials: document.querySelector(initialsForm).value,
            timeLeft: timerLeft
        };

        if(localStorage.scoresArray != null){
            prevScoresArray = JSON.parse(localStorage.getItem("scoresArray"));
            prevScoresArray.push(currentScore);
            localStorage.setItem("scoresArray", JSON.stringify(prevScoresArray));
        };
    };
};

function displayScores() {
  if (scoresArray !== null) {
    initialsList.innerHTML = "HIGH SCORES";
    initialsList.classList.remove("hidden");

    for (let i = 0; i < scoresArray.length; i++) {
      finalScore = scoresArray[i].initials + "====" + scoresArray[i].timeLeft;
      let scoreSlot = document.createElement("li");
      scoreSlot.textContent = finalScore;

      initialsList.append(scoreSlot);
    }
  } else return;
}

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
