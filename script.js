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

        if(secondsRemaining <= 0) {
            clearInterval(timerInterval);
            timeLeft.textContent = "Time left: " + 0;
            runGameOverScreen();
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

function nextQuestion (event) {
    gradeQuestion(event);
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

function gradeQuestion (event) {
    if (currentQuestion == 0 && event.target.id == "optionc") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (currentQuestion == 0 && event.target.id != "optionc") {
        secondsRemaining = secondsRemaining - 10;
    }

    if (currentQuestion == 1 && event.target.id == "optiond") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (currentQuestion == 1 && event.target.id != "optiond") {
        secondsRemaining = secondsRemaining - 10;
    }

    if (currentQuestion == 2 && event.target.id == "optiona") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (currentQuestion == 2 && event.target.id != "optiona") {
        secondsRemaining = secondsRemaining - 10;
    }

    if (currentQuestion == 3 && event.target.id == "optionb") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (currentQuestion == 3 && event.target.id != "optionb") {
        secondsRemaining = secondsRemaining - 10;
    }

    if (currentQuestion == 4 && event.target.id == "optiona") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (currentQuestion == 4 && event.target.id != "optiona") {
        secondsRemaining = secondsRemaining - 10;
    }

    if (currentQuestion == 5 && event.target.id == "optionc") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (currentQuestion == 5 && event.target.id != "optionc") {
        secondsRemaining = secondsRemaining - 10;
    }

    if (currentQuestion == 6 && event.target.id == "optiond") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (currentQuestion == 6 && event.target.id != "optiond") {
        secondsRemaining = secondsRemaining - 10;
    }

    if (currentQuestion == 7 && event.target.id == "optiona") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (currentQuestion == 7 && event.target.id != "optiona") {
        secondsRemaining = secondsRemaining - 10;
    }

    if (currentQuestion == 8 && event.target.id == "optionb") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (currentQuestion == 8 && event.target.id != "optionb") {
        secondsRemaining = secondsRemaining - 10;
    }

    if (currentQuestion == 9 && event.target.id == "optionc") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (currentQuestion == 9 && event.target.id != "optionc") {
        secondsRemaining = secondsRemaining - 10;
    }
}

function runGameOverScreen () {

    // Dynamically creating the page's elements

    let questionsSection = document.getElementById("questions");
    questionsSection.setAttribute("style", "display: none");

    let overScreen = document.createElement("h1");
    document.body.appendChild(overScreen);
    overScreen.setAttribute("style", "font-size: 10rem; color: var(--blue); text-align: center; margin-top: 10%;");
    overScreen.textContent = "GAME OVER";

    let yourScore = document.createElement("h2");
    document.body.appendChild(yourScore);
    yourScore.textContent = "YOUR SCORE WAS: " + userScore;
    yourScore.setAttribute ("style", "font-size: 5rem; color: var(--yellow); text-align: center; margin-top: 5%; margin-bottom: 4%;");

    let initialsContainer = document.createElement("div");
    document.body.appendChild(initialsContainer);
    initialsContainer.setAttribute("style", "display: flex; justify-content: center; flex-direction: column; margin-left: 31%; margin-right: 30%;");
    initialsContainer.setAttribute("id", "initials-container");

    let initialsPrompt = document.createElement("label");
    document.body.children[5].appendChild(initialsPrompt);
    initialsPrompt.textContent = "ENTER YOUR INITIALS: ";
    initialsPrompt.setAttribute("style", "color: var(--pink); text-align: center; margin-top: 11%;");

    let initialsField = document.createElement("input");
    document.body.children[5].appendChild(initialsField);
    initialsField.textContent = "";
    initialsField.setAttribute("style", "padding: 0.5rem; background-color: var(--green); margin-top: 10%; text-align: center; margin-left:3rem; margin-right: 3rem;");
    initialsField.setAttribute("type", "text");
    initialsField.setAttribute("id", "initials-field");

    let initialsSubmit = document.createElement("button");
    document.body.children[5].appendChild(initialsSubmit);
    initialsSubmit.textContent = "SUBMIT";
    initialsSubmit.setAttribute("type", "submit");
    initialsSubmit.setAttribute("style", "padding: 0.5rem; background-color: var(--blue); color: var(--darkgreen); height: 4rem; margin-top: 11%; border-radius: 2rem;");
    initialsSubmit.setAttribute("id", "submit-score");

    let pressedSubmit = document.querySelector("#submit-score");
    pressedSubmit.addEventListener("click", runHighScores);


    function runHighScores() {

        overScreen.setAttribute("style", "display: none");
        yourScore.setAttribute("style", "display: none");
        initialsContainer.setAttribute("style", "display: none");
        initialsField.setAttribute("style", "display: none");
        initialsSubmit.setAttribute("style", "display: none");

        let highScoresHeader = document.createElement("h1");
        document.body.appendChild(highScoresHeader);
        highScoresHeader.textContent = "HIGH SCORES";
        highScoresHeader.setAttribute("style", "font-size: 5rem; color: var(--yellow); text-align: center; margin-top: 15%;");

        let userInput = document.querySelector("#initials-field");
        console.log(userInput.value);

        // Working on local storage

        let allScores = [];

        let userInitials = document.createElement("p")
        document.body.appendChild(userInitials);
        userInitials.textContent = userInput.value + "          .....          " + userScore;
        userInitials.setAttribute("style", "font-size: 3rem; color: var(--blue); text-align: center; margin-top: 5%; margin-left: 3%; margin-right: 3%; margin-bottom: 3%;")
        allScores = allScores.concat(userInitials.textContent);

        localStorage.setItem("scores", allScores);
        displayAllScores();

        function displayAllScores() {
            let retrievedScores = localStorage.getItem("scores");
            userInitials.textContent = retrievedScores;
        }
    }

}