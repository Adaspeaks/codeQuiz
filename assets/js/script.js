const viewHighScoreBtn = document.querySelector("#viewHighScore");
const timer = document.querySelector("#currentTime");
const currentScore = document.querySelector("#currentScore");
const starterSplash = document.querySelector("#starterSplash");
const startBtn = document.querySelector("#startBtn");
const killscreen = document.querySelector("#killScreen");
const submitHighScoreBtn = document.querySelector("#submitBtn");
const initialsList = document.querySelector("#initialList");
const prevHighScore = document.querySelector("#prevHighscore");
const resetInitialsListBtn = document.querySelector("#resetInitialsList");
const homeBtn = document.querySelector("#home");
const questionTxt = document.querySelector("#questionText");
const answerA = document.querySelector("#answerA");
const answerB = document.querySelector("#answerB");
const answerC = document.querySelector("#answerC");
const answerD = document.querySelector("#answerD");

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