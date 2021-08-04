const startBtn = document.getElementById("start-btn")
const scoreBtn = document.getElementById("score-btn")
const quizContainerEl = document.getElementById("quizContainer")
const timerContainerEl = document.getElementById("timer-container")
const questionEl = document.getElementById("questions")
const answerBtnEl = document.getElementById("li-btn")
const nameEl = document.getElementById("killScreen")
const highscoreEl = document.getElementById("highscores")
const finalScore = document.getElementById("score")
const submitBtn = document.getElementById("submit-btn")



// timer setup
let timerElement= document.querySelector(".timer-count");
let timer, timerCount;
let quizDone = false
let questionIndex= 0;

let score;
let highscores= JSON.parse(localStorage.getItem("scoreBoard")) || [];

function quizTimer() {
    timer= setInterval(function(){
      timerCount--;
      timerElement.textContent = timerCount;
      //test if quiz is finished
      if (quizDone || timerCount <= 0) {
        clearInterval(timer);
        quizEnd();
      }
    }, 1000);
  }
  // end of timer
  
function startQuiz() {
    startBtn.classList.add("hidden")
    scoreBtn.classList.add("hidden")
    quizContainerEl.classList.remove("hidden")
    timerContainerEl.classList.remove("hidden")
    quizDone = false
    timerCount = 60
    score = 0
    quizTimer()
    displayQuestion()
  }
  
  function displayQuestion() {
    questionEl.innerText = questions[questionIndex].question
    document.querySelector("#choices").innerHTML = ""
    questions[questionIndex].answer.forEach(function(item){
      let button = document.createElement("button")
      button.innerText = item
      button.setAttribute("class", "btn")
      button.addEventListener("click", checkAnswer)
      document.querySelector("#choices").appendChild(button)
    })
  }
  
  function checkAnswer(event){
    let answer = event.target.textContent
    if (answer === questions[questionIndex].correctAnswer){
        score += 25
    }
    else {
      timerCount -= 20
    }
    questionIndex++
    if (questionIndex === questions.length){
      quizDone = true;
      quizEnd()
    }
    else {
      displayQuestion()
    }
  }
  
  function quizEnd(){
    quizContainerEl.classList.add("hidden")
    timerContainerEl.classList.add("hidden")
    nameEl.classList.remove("hidden")
    finalScore.innerText = "Your Score: " + score
    showBoard()
  }
  
  function showBoard(){
    highscoreEl.classList.remove("hidden")
  highscores.sort(function(a, b){return b.score - a.score})
  document.getElementById("highscores").innerHTML = ""
  highscores.forEach(function (foo){
    let newScore = document.createElement("li")
    newScore.textContent = foo.name + " " + foo.score
    document.getElementById("highscores").appendChild(newScore)
  })
}

function saveHighscore(){
  let name = document.getElementById("initials").value
    let entry = {name, score}
    highscores.push(entry)
    localStorage.setItem("scoreBoard", JSON.stringify(highscores));
    showBoard();
  }
  
  //array for the questions 
const questions = [
  {
    question: "Choose the 3rd option?",
    answer: [
      "<3rd>",
      "<3rd>",
      "<actually 3rd>",
      "<4th>"
    ],
    correctAnswer: "<actually 3rd>"
  },
    {
      question: "The answer is C?",
      answer: [
        "A",
        "B",
        "C",
        "D"
        ],
        correctAnswer: "C"
      },
    {
      question: "Like a standardized test, the answer is still C",
      answer: [
        "A",
        "B",
        "C",
        "D"
        ],
        correctAnswer: "C"
      },
    {
      question: "I lied, the answer is D now?",
      answer: [
        "A",
        "B",
        "C",
        "D"
        ],
        correctAnswer: "D"
      },
    {
      question: "QUICK! What was the answer to the first question!?",
      answer: [
        "A",
        "B",
        "C",
        "D"
        ],
        correctAnswer: "C"
      },
    {
      question: "See I told you the answer was always C",
      answer: [
        "A",
        "B",
        "C",
        "D"
        ],
        correctAnswer: "C"
      },
    {
      question: "Allthough doing this may actually develop trust issues...",
      answer: [
        "A",
        "B",
        "C",
        "D"
        ],
        correctAnswer: "C"
      },
    {
      question: "And that may not be good...?",
      answer: [
        "A",
        "B",
        "C",
        "D"
        ],
        correctAnswer: "C"
      },
    {
      question: "you know let's break the pattern choose A",
      answer: [
        "A",
        "B",
        "C",
        "D"
        ],
        correctAnswer: "C"
      },
    {
      question: "If you fell for it, I'm dissapointed and ashamed... choose C?",
      answer: [
        "A",
        "B",
        "C",
        "D"
        ],
        correctAnswer: "C"
      },
      
        ]
        
        
        
        startBtn.addEventListener("click", startQuiz)
        submitBtn.addEventListener("click", saveHighscore)
        scoreBtn.addEventListener("click", showBoard)