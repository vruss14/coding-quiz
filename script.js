// Testing the page
console.log("Page loaded!");

// Hide answer options when page is first displayed

function init () {
    let choiceButtons = document.querySelector(".answer-buttons");
    choiceButtons.setAttribute("style", "display:none");
}

init ();

// Pressing the start button starts the timer and displays answer buttons

let startButton = document.querySelector("#start-button");
let timeLeft = document.querySelector(".time-left");
let secondsRemaining = 60;

startButton.addEventListener("click", function setTimer() {
    let choiceButtons = document.querySelector(".answer-buttons");
    choiceButtons.setAttribute("style", "display:visible");

    let timerInterval = setInterval(function() {
        secondsRemaining--;
        timeLeft.textContent = "Time left: " + secondsRemaining;

        if(secondsRemaining === 0) {
            clearInterval(timerInterval);
        }
        
    }, 1000);
});

//Question one

let homeInfo = document.querySelector("#quiz-heading");
let questionHeader = document.querySelector ("#question-text");

let choiceA = document.querySelector ("#optiona");
let choiceB = document.querySelector ("#optionb");
let choiceC = document.querySelector ("#optionc");
let choiceD = document.querySelector ("#optiond");

let firstQuestion = "Which programming language is commonly responsible for the advanced functionality of a webpage?";

startButton.addEventListener("click", function runQuestions() {
    homeInfo.setAttribute ("style", "display: none");
    questionHeader.textContent = firstQuestion;
    optiona.textContent = "HTML";
    optionb.textContent = "CSS";
    optionc.textContent = "JavaScript";
    optiond.textContent = "Python";

});