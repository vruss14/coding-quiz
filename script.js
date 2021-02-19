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

//Beginning variables

let userScore = 0;
let homeInfo = document.getElementById ("quiz-heading");
let questionHeader = document.getElementById ("question-text");

let choiceA = document.getElementById ("optiona");
let choiceB = document.getElementById ("optionb");
let choiceC = document.getElementById ("optionc");
let choiceD = document.getElementById ("optiond");

let questionBank = [
    
    {question: "Which of the following HTML elements is a self-closing tag?", 
    answerA: "<body>", 
    answerB: "<li>", 
    answerC: "<img>", 
    answerD: "<a>", 
    correctAnswer: "<img>"},

    {question: "When linking an external CSS stylesheet, which of the following attributes is NOT needed?", 
    answerA: "rel", 
    answerB: "type", 
    answerC: "href", 
    answerD: "src",
    correctAnswer: "src"},

    {question: "What is the functionality of the HTML code: <meta name = “viewport” content = “width=device-width, initial-scale=1.0”> ?", 
    answerA: "Sets the user’s viewport width and zoom level to ensure responsive design components of the code are rendered properly", 
    answerB: "Ensures that the content is rendered properly for only desktop computers",
    answerC: "Sets a universal height and width for HTML content regardless of the user’s device size", 
    answerD: "It has no functionality for the user experience and is included for semantic reasons",
    correctAnswer: "Sets the user’s viewport width and zoom level to ensure responsive design components of the code are rendered properly"},

    {question: "What is the correct order for the CSS box model when considering the innermost components to the outermost components?", 
    answerA: "Content, border, padding, margins", 
    answerB: "Content, padding, border, margins", 
    answerC: "Padding, content, border, margins", 
    answerD: "Padding, content, margins, border",
    correctAnswer: "Content, padding, border, margins"},

    {question: "What is the difference between em and vw in CSS?", 
    answerA: "em refers to font scaling, while vw is a percentage width of the viewport", 
    answerB: "There are no fundamental differences and can thus be used interchangeably", 
    answerC: "em refers to the viewport width, while vw handles font scaling", 
    answerD: "em handles the viewport width, while vw handles the viewport height",
    correctAnswer: "em refers to font scaling, while vw is a percentage width of the viewport"},

    {question: "When selecting a specific class in CSS, what symbol should precede the class name?", 
    answerA: "*", 
    answerB: "#", 
    answerC: ".", 
    answerD: "::",
    correctAnswer: "."},

    {question: "Which of the following is NOT a primitive type of data in JavaScript?", 
    answerA: "Strings", 
    answerB: "Booleans", 
    answerC: "Numbers", 
    answerD: "Comparisons",
    correctAnswer: "Comparisons"},

    {question: "console.log(a%b); will tell you what in the console?", 
    answerA: "The remainder after a is divided by b", 
    answerB: "The percentage of a relative to b", 
    answerC: "The percentage of b relative to a", 
    answerD: "The answer when a is divided by b",
    correctAnswer: "The remainder after a is divided by b"},

    {question: "When using a conditional statement, what happens if an “if” statement is included without an “else” statement?", 
    answerA: "An error will display in the console", 
    answerB: "The computer will only act if the “if” statement holds true, and if not, it will do nothing", 
    answerC: "The computer will perform the same action whether or not the “if” statement is true", 
    answerD: "Nothing will happen regardless of if the “if” statement is true",
    correctAnswer: "The computer will only act if the “if” statement holds true, and if not, it will do nothing"},

    {question: "How can a programmer remove commas between items in an array when displaying results?", 
    answerA: "The .removeCommas method", 
    answerB: "The .deletePunctuation method", 
    answerC: "The .join method", 
    answerD: "The .link method",
    correctAnswer: "The .join method"},
]

//Question one

let currentQuestion = 0;

startButton.addEventListener("click", function runQuestionOne() {
    homeInfo.setAttribute ("style", "display: none");

    questionHeader.textContent = questionBank[0].question;
    optiona.textContent = questionBank[0].answerA;
    optionb.textContent = questionBank[0].answerB;
    optionc.textContent = questionBank[0].answerC;
    optiond.textContent = questionBank[0].answerD;
});

// When a user answers questions

choiceA.addEventListener("click", nextQuestion);
choiceB.addEventListener("click", nextQuestion);
choiceC.addEventListener("click", nextQuestion);
choiceD.addEventListener("click", nextQuestion);

function nextQuestion () {
    gradeQuestion();
    currentQuestion++;
    displayNextQuestion();
    
}
function displayNextQuestion () {
    for(let i= currentQuestion; i < questionBank.length; i++) {
        questionHeader.textContent = questionBank[i].question;
        optiona.textContent = questionBank[i].answerA;
        optionb.textContent = questionBank[i].answerB;
        optionc.textContent = questionBank[i].answerC;
        optiond.textContent = questionBank[i].answerD;
        return;
    }
}

// Error: Cannot read property 'target' of undefined

function gradeQuestion (event) {
    if (currentQuestion == 0 && event.target.id == "optionc") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (currentQuestion == 0 && event.target.id != "optionc") {
        secondsRemaining = secondsRemaining - 10;
    }

}
