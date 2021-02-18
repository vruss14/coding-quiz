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
let homeInfo = document.querySelector("#quiz-heading");
let questionHeader = document.querySelector ("#question-text");

let choiceA = document.querySelector ("#optiona");
let choiceB = document.querySelector ("#optionb");
let choiceC = document.querySelector ("#optionc");
let choiceD = document.querySelector ("#optiond");

let firstQuestion = "Which of the following HTML elements is a self-closing tag?";
let secondQuestion = "When linking an external CSS stylesheet, which of the following attributes is NOT needed?";
let thirdQuestion = "What is the functionality of the HTML code: <meta name = “viewport” content = “width=device-width, initial-scale=1.0”> ?";
let fourthQuestion = "What is the correct order for the CSS box model when considering the innermost components to the outermost components?";
let fifthQuestion = "What is the difference between em and vw in CSS?";
let sixthQuestion = "When selecting a specific class in CSS, what symbol should precede the class name?";
let seventhQuestion = "Which of the following is not a primitive type of data in JavaScript?";
let eighthQuestion = "console.log(a%b); will tell you what in the console?";
let ninthQuestion = "When using a conditional statement, what happens if an “if” statement is included without an “else” statement?";
let tenthQuestion = "How can a programmer remove commas between items in an array when displaying results?";

//Question one

startButton.addEventListener("click", function runQuestionOne() {
    homeInfo.setAttribute ("style", "display: none");

    questionHeader.textContent = firstQuestion;
    optiona.textContent = "<body>";
    optionb.textContent = "<li>";
    optionc.textContent = "<img>";
    optiond.textContent = "<a>";
});

// When a user answers questions one and two

choiceA.addEventListener("click", userResponses);
choiceB.addEventListener("click", userResponses);
choiceC.addEventListener("click", userResponses);
choiceD.addEventListener("click", userResponses);

function userResponses (event) {

    if (event.target.textContent == "<img>") {
        userScore = userScore + 10;
        console.log(userScore);
        runQuestionTwo ();
    } else if (event.target.textContent == "<body>" || "<li>" || "<a>") {
        secondsRemaining = secondsRemaining -15;
        runQuestionTwo ();
    } else if (event.target.textContent == "src") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (event.target.textContent == "rel" || "type" || "href") {
        secondsRemaining = secondsRemaining -15;
    }
    return;
}

// Question two

function runQuestionTwo () {
    questionHeader.textContent = secondQuestion;
    optiona.textContent = "rel";
    optionb.textContent = "type";
    optionc.textContent = "href";
    optiond.textContent = "src";
}

/*
// Question three

function runQuestionThree () {
    questionHeader.textContent = thirdQuestion;
    optiona.textContent = "Sets the user’s viewport width and zoom level to ensure responsive design components of the code are rendered properly";
    optionb.textContent = "Ensures that the content is rendered properly for only desktop computers";
    optionc.textContent = "Sets a universal height and width for HTML content regardless of the user’s device size";
    optiond.textContent = "It has no functionality for the user experience and is included for semantic reasons";
}

function userResponseThree (event) {
    if (event.target.id == "optiona") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (event.target.id == "optionb") {
        secondsRemaining = secondsRemaining - 15;
    } else if (event.target.id == "optionc") {
        secondsRemaining = secondsRemaining - 15;
    } else {
        secondsRemaining = secondsRemaining - 15;
    }
    runQuestionFour();
    return;
}

choiceA.addEventListener("click", userResponseThree);
choiceB.addEventListener("click", userResponseThree);
choiceC.addEventListener("click", userResponseThree);
choiceD.addEventListener("click", userResponseThree);


// Question four

function runQuestionFour () {
    questionHeader.textContent = fourthQuestion;
    optiona.textContent = "Content, border, padding, margins";
    optionb.textContent = "Content, padding, border, margins";
    optionc.textContent = "Padding, content, border, margins";
    optiond.textContent = "Padding, content, margins, border";
}

function userResponseFour (event) {
    if (event.target.id == "optiona") {
        secondsRemaining = secondsRemaining - 15;
    } else if (event.target.id == "optionb") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (event.target.id == "optionc") {
        secondsRemaining = secondsRemaining - 15;
    } else {
        secondsRemaining = secondsRemaining - 15;
    }
    runQuestionFive();
    return;
}

choiceA.addEventListener("click", userResponseFour);
choiceB.addEventListener("click", userResponseFour);
choiceC.addEventListener("click", userResponseFour);
choiceD.addEventListener("click", userResponseFour);


// Question five

function runQuestionFive () {
    questionHeader.textContent = fifthQuestion;
    optiona.textContent = "em refers to font scaling, while vw is a percentage width of the viewport";
    optionb.textContent = "There are no fundamental differences and can thus be used interchangeably";
    optionc.textContent = "em refers to the viewport width, while vw handles font scaling";
    optiond.textContent = "em handles the viewport width, while vw handles the viewport height";
    return;
}

function userResponseFive (event) {
    if (event.target.id == "optiona") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (event.target.id == "optionb") {
        secondsRemaining = secondsRemaining - 15;
    } else if (event.target.id == "optionc") {
        secondsRemaining = secondsRemaining - 15;
    } else {
        secondsRemaining = secondsRemaining - 15;
    }
    runQuestionSix();
    return;
}

choiceA.addEventListener("click", userResponseFive);
choiceB.addEventListener("click", userResponseFive);
choiceC.addEventListener("click", userResponseFive);
choiceD.addEventListener("click", userResponseFive);


// Question six

function runQuestionSix () {
    questionHeader.textContent = sixthQuestion;
    optiona.textContent = "*";
    optionb.textContent = "#";
    optionc.textContent = ".";
    optiond.textContent = "::";
}

function userResponseSix (event) {
    if (event.target.id == "optiona") {
        secondsRemaining = secondsRemaining - 15;
    } else if (event.target.id == "optionb") {
        secondsRemaining = secondsRemaining - 15;
    } else if (event.target.id == "optionc") {
        userScore = userScore + 10;
        console.log(userScore);
    } else {
        secondsRemaining = secondsRemaining - 15;
    }
    runQuestionSeven();
    return;
}

choiceA.addEventListener("click", userResponseSix);
choiceB.addEventListener("click", userResponseSix);
choiceC.addEventListener("click", userResponseSix);
choiceD.addEventListener("click", userResponseSix);


// Question seven

function runQuestionSeven () {
    questionHeader.textContent = seventhQuestion;
    optiona.textContent = "Strings";
    optionb.textContent = "Booleans";
    optionc.textContent = "Numbers";
    optiond.textContent = "Comparisons";
}

function userResponseSeven (event) {
    if (event.target.id == "optiona") {
        secondsRemaining = secondsRemaining - 15;
    } else if (event.target.id == "optionb") {
        secondsRemaining = secondsRemaining - 15;
    } else if (event.target.id == "optionc") {
        secondsRemaining = secondsRemaining - 15;
    } else {
        userScore = userScore + 10;
        console.log(userScore);
    }
    runQuestionEight();
    return;
}

choiceA.addEventListener("click", userResponseSeven);
choiceB.addEventListener("click", userResponseSeven);
choiceC.addEventListener("click", userResponseSeven);
choiceD.addEventListener("click", userResponseSeven);


// Question eight

function runQuestionEight () {
    questionHeader.textContent = eighthQuestion;
    optiona.textContent = "The remainder after a is divided by b";
    optionb.textContent = "The percentage of a relative to b";
    optionc.textContent = "The percentage of b relative to a";
    optiond.textContent = "The answer when a is divided by b";
}

function userResponseEight (event) {
    if (event.target.id == "optiona") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (event.target.id == "optionb") {
        secondsRemaining = secondsRemaining - 15;
    } else if (event.target.id == "optionc") {
        secondsRemaining = secondsRemaining - 15;
    } else {
        secondsRemaining = secondsRemaining - 15;
    }
    runQuestionNine();
    return;
}

choiceA.addEventListener("click", userResponseEight);
choiceB.addEventListener("click", userResponseEight);
choiceC.addEventListener("click", userResponseEight);
choiceD.addEventListener("click", userResponseEight);


// Question nine

function runQuestionNine () {
    questionHeader.textContent = ninthQuestion;
    optiona.textContent = "An error will display in the console";
    optionb.textContent = "The computer will only act if the “if” statement holds true, and if not, it will do nothing";
    optionc.textContent = "The computer will perform the same action whether or not the “if” statement is true";
    optiond.textContent = "Nothing will happen regardless of if the “if” statement is true";
}

function userResponseNine (event) {
    if (event.target.id == "optiona") {
        secondsRemaining = secondsRemaining - 15;
    } else if (event.target.id == "optionb") {
        userScore = userScore + 10;
        console.log(userScore);
    } else if (event.target.id == "optionc") {
        secondsRemaining = secondsRemaining - 15;
    } else {
        secondsRemaining = secondsRemaining - 15;
    }
    runQuestionTen();
    return;
}

choiceA.addEventListener("click", userResponseNine);
choiceB.addEventListener("click", userResponseNine);
choiceC.addEventListener("click", userResponseNine);
choiceD.addEventListener("click", userResponseNine);


// Question ten

function runQuestionTen () {
    questionHeader.textContent = tenthQuestion;
    optiona.textContent = "The .removeCommas method";
    optionb.textContent = "The .deletePunctuation method";
    optionc.textContent = "The .join method";
    optiond.textContent = "The .link method";
}

function userResponseTen (event) {
    if (event.target.id == "optiona") {
        secondsRemaining = secondsRemaining - 15;
    } else if (event.target.id == "optionb") {
        secondsRemaining = secondsRemaining - 15;
    } else if (event.target.id == "optionc") {
        userScore = userScore + 10;
        console.log(userScore);
    } else {
        secondsRemaining = secondsRemaining - 15;
    }
}

choiceA.addEventListener("click", userResponseTen);
choiceB.addEventListener("click", userResponseTen);
choiceC.addEventListener("click", userResponseTen);
choiceD.addEventListener("click", userResponseTen); */

