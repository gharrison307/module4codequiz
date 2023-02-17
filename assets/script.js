//Variable Declaration

var startButtonEl = document.getElementById("startButton");
var outputResponseEl = document.getElementById("outputResponse");
var openingSlideEl = document.getElementById("openingSlide");
var questionBox = document.getElementById("questionBox");
var timerEl = document.getElementById("timer");
var questionTextEl = document.getElementById("questionText");
var answerButton = document.querySelectorAll("#button");
var scoreEl = document.getElementById("score");
var begEndTextEl = document.getElementById("begText");

var timeLeft = 90;
var questionNumber = 1;
var win = 0;

// Question Arrays
var question1 = {
  questionLine: "What is the capital of Colorado?",
  answers: ["Denver", "Cheyenne", "Colorado Springs", "Boulder"],
  correctAnswer: "Denver",
};
var question2 = {
  questionLine: "What is the State Bird of Colorado?",
  answers: ["Cactus Wren", "American Robin", "Wood Thrush", "Lark Bunting"],
  correctAnswer: "Lark Bunting",
};

var question3 = {
  questionLine: "What is the longest river in the world?",
  answers: ["The Yangtze", "The Amazon", "The Nile", "The Mississippi"],
  correctAnswer: "The Nile",
};
// Functions

// gamestart function - starts the game timer, hides start text and unhides questions and answers
function gameStart() {
  console.log("game has started");
  timer();
  openingSlideEl.setAttribute("class", "hidden");
  questionBox.setAttribute("class", "shown");
  firstQuestion();
}

// questions function - Needs to display the first question with the answers below

function firstQuestion(event) {
  if (questionNumber === 1) {
    questionTextEl.textContent = question1.questionLine;
    for (var i = 0; i < question1.answers.length; i++) {
      answerButton[i].textContent = question1.answers[i];
    }

    console.log(questionNumber);
    // loaded the questions and added one to the questionNumber

    questionBox.addEventListener("click", function (event) {
      if (event) {
        if (event.target.textContent === question1.correctAnswer) {
          win++;
          scoreEl.textContent = "Score: " + win;
          localStorage.setItem("score", win);
          questionNumber++;
          console.log(win);
          console.log(questionNumber);
          firstQuestion();
        } else {
          timeLeft = timeLeft - 15;
          questionNumber++;
          console.log(event.target.textContent);
          firstQuestion();
        }
      }
    });

    // 2nd set of questions
  } else if (questionNumber === 2) {
    questionTextEl.textContent = question2.questionLine;
    for (var i = 0; i < question2.answers.length; i++) {
      answerButton[i].textContent = question2.answers[i];
    }

    questionBox.addEventListener("click", function (event) {
      if (event) {
        if (event.target.textContent === question2.correctAnswer) {
          win++;
          scoreEl.textContent = "Score: " + win;
          localStorage.setItem("score", win);
          questionNumber++;
          console.log(win);
          console.log(questionNumber);
          firstQuestion();
        } else {
          timeLeft = timeLeft - 15;
          questionNumber++;
          firstQuestion();
          console.log(event.target.textContent);
        }
      }
    });

    // 3rd
  } else if (questionNumber === 3) {
    questionTextEl.textContent = question3.questionLine;
    for (var i = 0; i < question3.answers.length; i++) {
      answerButton[i].textContent = question3.answers[i];
    }
    questionBox.addEventListener("click", function (event) {
      if (event) {
        if (event.target.textContent === question3.correctAnswer) {
          win++;
          scoreEl.textContent = "Score: " + win;
          localStorage.setItem("score", win);
          console.log(win);
          console.log(questionNumber);
          endGame();
        } else {
          timeLeft = timeLeft - 15;
          endGame();
        }
      }
    });
  }
}
// timer function

function timer() {
  console.log("Timer Started!");
  timerEl.textContent = "Time left: 90";
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time left: " + timeLeft;

    // when timeLeft === 0 the end game function begins
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      endGame();
      timerEl.textContent = "Game Over ";
    }
  }, 1000);
}

// end game funcation

function endGame() {
  openingSlideEl.setAttribute("class", "shown");
  questionBox.setAttribute("class", "hidden");
  timeLeft = 0;
  begEndTextEl.textContent =
    "Nice work. Please enter your intials to save your score to the leaderboard";
  startButtonEl.setAttribute("class", "hidden");
}

// Event listener
startButtonEl.addEventListener("click", gameStart);
// questionBox.addEventListener("click", firstQuestion);
