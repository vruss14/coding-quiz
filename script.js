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

        if(secondsRemaining <=10) {
            timeLeft.setAttribute("style", "color: red");
        }

        if(secondsRemaining === 0) {
            clearInterval(timerInterval);
        }
        
    }, 1000);
});

//Question one

let userScore = 0;
let homeInfo = document.querySelector("#quiz-heading");
let questionHeader = document.querySelector ("#question-text");

let choiceA = document.querySelector ("#optiona");
let choiceB = document.querySelector ("#optionb");
let choiceC = document.querySelector ("#optionc");
let choiceD = document.querySelector ("#optiond");

let firstQuestion = "Which programming language is commonly responsible for the advanced functionality of a webpage?";
let secondQuestion = "What does HTML stand for?";

startButton.addEventListener("click", function runQuestionOne() {
    homeInfo.setAttribute ("style", "display: none");
    questionHeader.textContent = firstQuestion;
    optiona.textContent = "HTML";
    optionb.textContent = "CSS";
    optionc.textContent = "JavaScript";
    optiond.textContent = "Python";

});

// User answers question one

function userResponseOne (event) {
    if (event.target.id == "optiona") {
        secondsRemaining = secondsRemaining - 15;
        runQuestionTwo ();
    } else if (event.target.id == "optionb") {
        secondsRemaining = secondsRemaining - 15;
        runQuestionTwo ();
    } else if (event.target.id == "optionc") {
        userScore = userScore + 10;
        console.log(userScore);
        runQuestionTwo ();

    } else {
        secondsRemaining = secondsRemaining - 15;
        questionHeader.textContent = secondQuestion;
        runQuestionTwo ();
    }
}

choiceA.addEventListener("click", userResponseOne);
choiceB.addEventListener("click", userResponseOne);
choiceC.addEventListener("click", userResponseOne);
choiceD.addEventListener("click", userResponseOne);

// Question two

function runQuestionTwo () {
    questionHeader.textContent = secondQuestion;
    optiona.textContent = "Hypertext Markup Language";
    optionb.textContent = "Hypertext Markdown Language";
    optionc.textContent = "Hyperlinks Meta tags and Loops";
    optiond.textContent = "Hypertext Markup Lingo";
}

function userResponseTwo (event) {
    if (event.target.id == "optiona") {
        userScore = userScore + 10;
        console.log(userScore);
    /* } else if (event.target.id == "optionb") {
        choiceB.setAttribute("style", "background-color:red");
    } else if (event.target.id == "optionc") {
        choiceC.setAttribute("style", "background-color:red");
    } else {
        choiceD.setAttribute("style", "background-color:red"); */
    }
}

choiceA.addEventListener("click", userResponseTwo);
choiceB.addEventListener("click", userResponseTwo);
choiceC.addEventListener("click", userResponseTwo);
choiceD.addEventListener("click", userResponseTwo);

