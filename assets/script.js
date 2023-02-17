//Variable Declaration

var startButtonEl = document.getElementById("startButton");
var outputResponseEl = document.getElementById("outputResponse");
var openingSlideEl = document.getElementById("openingSlide");
var questionBox = document.getElementById("questionBox");
var timerEl = document.getElementById("timer");

var timeLeft = 90;
var questionNumber = 0;
var win = 0;

// Question Arrays
var question1 = [
  {
    questions: "What is the capital of Colorado?",
    answers: ["Denver", "Cheyenne", "Colorado Springs", "Boulder"],
    correctAnswer: "Denver",
  },
];
var question2 = [
  {
    questionline: "What is the State Bird of Colorado?",
    answers: ["Cactus Wren", "American Robin", "Wood Thrush", "Lark Bunting"],
    correctAnswer: "Lark Bunting",
  },
];

var question3 = [
  {
    questionline: "What is the longest river in the world?",
    answers: ["The Yangtze", "The Amazon", "The Nile", "The Mississippi"],
    correctAnswer: "The Nile",
  },
];

// Functions

// gamestart function - starts the game timer, hides start text and unhides questions and answers
function gameStart() {
  console.log("game has started");

  timer();
  openingSlideEl.setAttribute("class", "hidden");
  questionBox.setAttribute("class", "shown");
}

// questions function - Needs to display the question with the answers below

function nextQuestion() {
  console.log("next question!");
}

// timer function

function timer() {
  console.log("Timer Started!");
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time left: " + timeLeft;

    // when timeLeft === 0 the end game function begins
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      endGame();
      timerEl.textContent = " ";
    }
  }, 1000);
}

// end game funcation

function endGame() {}

// Event listener
startButtonEl.addEventListener("click", gameStart);
