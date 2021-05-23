const min = 0
const max = 9
const h2QEl = document.getElementById("question")
const h1QHeaderEl = document.getElementById("quiz-h1")
const timerEl = document.getElementById('countdown');
const initialH1El = document.getElementById('initial-h1')
const initialStartBtn = document.getElementById('start')
const viewHighScoresBtn = document.getElementById('high-scoresbtn')
const backbtn = document.getElementById('back')
const h1HighScore = document.getElementById('high-scores-h1')
const finalScorePrompt = document.getElementById('finalScore-prompt')
const finalScore = document.getElementById('finalScore')
const initials = document.getElementById('initials')
const loadScoreEl = document.getElementById('savedScore')
const answerBtn0 = document.querySelector('#answer0')
const answerBtn1 = document.querySelector('#answer1')
const answerBtn2 = document.querySelector('#answer2')
const answerBtn3 = document.querySelector('#answer3')
var score = 0;
var i = 0;
var qOrder;
var questionArr
var maxAnswers = 4
var timeLeft = 99;
var timeDecrement = 9;
var formEl = document.querySelector("#highscore-form");
var highScoresArr = [{ name: "AJ", score: 0 }]
highScoresArr = loadScore(highScoresArr)
var count = 0
var qPoint = 0;

function questions() {
    var questionArr = [
/*0*/        { q: "How do you iterate through an array?", a: "for loops" },
/*1*/        { q: "Conditional Statement considering 'either or'", a: "if/else" },
/*2*/        { q: "Continues running till all parameters are met, may complete an action before running", a: "do..while" },
/*3*/        { q: "Ends looping, regardless of conditions met", a: "break" },
/*4*/        { q: "Keeps moving through iterations, ignoring code below it", a: "continue" },
/*5*/        { q: "Emmet code to quickly enter initial index code", a: "html:5" },
/*6*/        { q: "Append array in javascript", a: "push" },
/*7*/        { q: "Removes last element of an array", a: "pop" },
/*8*/        { q: "Position of element in an array", a: "index" },
/*9*/        { q: "Terminology used to change datatypes", a: "parse" }
    ]
    return questionArr
}

function generateRandomQuestion() {
    var questionArr = questions()
    var qOrder = []
    var number
    while (qOrder.length < questionArr.length) {
        number = getRandom(min, max)
        if (qOrder.indexOf(number) == -1)
            qOrder.push(number)
    }
    console.log("Order of questions in the array qOrder: " + qOrder)
    return qOrder
}
function generateQuestion(i, randomOrder, questionArr) {
    h2QEl.textContent = questionArr[randomOrder[i]].q

    return randomOrder
}
function generateAnswer(i, qOrder, questionArr) {
    var aOrder = []
    aOrder = generateRandomAnswers(maxAnswers)
    console.log("Index of all random answers from questionsArr " + aOrder, "\nIndex of question from random question: " + qOrder[i], "\nIndex of correct answer from aOrder array: " + aOrder.indexOf(qOrder[i]))
    for (var i = 0; i < aOrder.length; i++) {
        var btnAEl = document.getElementById("answer" + i)
        btnAEl.textContent = i + 1 + ": " + questionArr[aOrder[i]].a
    }
    return aOrder
}
function generateRandomAnswers(maxAnswers) {
    var aOrder = []
    var number
    while (aOrder.length < maxAnswers) {
        number = getRandom(min, max)
        if (aOrder.indexOf(number) == -1)
            aOrder.push(number)
    }
    if (aOrder.indexOf(qOrder[i - 1]) == -1)
        return generateRandomAnswers(maxAnswers)
    return aOrder
}
//Random number generator inclusive
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = "Timer: " + timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = "Timer: " + timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}
function questionTimer() {
    var timeInterval2 = setInterval(function () {
        count++
        timeLeft++
        document.getElementById("answer0").style.pointerEvents = "none"
        document.getElementById("answer1").style.pointerEvents = "none"
        document.getElementById("answer2").style.pointerEvents = "none"
        document.getElementById("answer3").style.pointerEvents = "none"
        if (count == 3) {
            qPoint++
            if (qPoint > 9) {
                resetBackgroundColors()
                count = 0
                document.getElementById("answer0").style.pointerEvents = "auto"
                document.getElementById("answer1").style.pointerEvents = "auto"
                document.getElementById("answer2").style.pointerEvents = "auto"
                document.getElementById("answer3").style.pointerEvents = "auto"
                clearInterval(timeInterval2)
            } else {
                document.getElementById("answer0").style.pointerEvents = "auto"
                document.getElementById("answer1").style.pointerEvents = "auto"
                document.getElementById("answer2").style.pointerEvents = "auto"
                document.getElementById("answer3").style.pointerEvents = "auto"
                nextQuestion()
                resetBackgroundColors()
                count = 0
                clearInterval(timeInterval2)
            }
        }
    }, 1000)
}
function resetBackgroundColors() {
    document.getElementById("answer0").style.background = "lightblue"
    document.getElementById("answer1").style.background = "lightblue"
    document.getElementById("answer2").style.background = "lightblue"
    document.getElementById("answer3").style.background = "lightblue"
}
function removeQuizButtons() {
    document.getElementById("quiz-h1").style.display = "none"
    document.getElementById("countdown").style.display = "none"
    document.getElementById("question").style.display = "none"
    document.getElementById("answer0").style.display = "none"
    document.getElementById("answer1").style.display = "none"
    document.getElementById("answer2").style.display = "none"
    document.getElementById("answer3").style.display = "none"
}
function displayQuizButtons() {
    document.getElementById("quiz-h1").style.display = "block"
    document.getElementById("countdown").style.display = "block"
    document.getElementById("question").style.display = "block"
    document.getElementById("answer0").style.display = "block"
    document.getElementById("answer1").style.display = "block"
    document.getElementById("answer2").style.display = "block"
    document.getElementById("answer3").style.display = "block"
}
function removeInitialPrompt() {
    document.getElementById("start").style.display = "none"
    document.getElementById("initial-h1").style.display = "none"
    document.getElementById("initial-h3").style.display = "none"
}
function displayInitialPrompt() {
    document.getElementById("start").style.display = "block"
    document.getElementById("initial-h1").style.display = "block"
    document.getElementById("initial-h3").style.display = "block"
}
function removeFinalScore() {
    document.getElementById("finalScore-prompt").style.display = "none"
    document.getElementById("finalScore").style.display = "none"
    document.getElementById("initials").style.display = "none"
    document.getElementById("highScore-box").style.display = "none"
    document.getElementById("save-score").style.display = "none"
}
function displayFinalScore() {
    //    document.getElementById("high-scores-h1").style.display = "block"
    document.getElementById("finalScore-prompt").style.display = "block"
    document.getElementById("finalScore").style.display = "block"
    document.getElementById("initials").style.display = "block"
    document.getElementById("highScore-box").style.display = "block"
    document.getElementById("save-score").style.display = "block"
}
function removeHighScore() {
    document.getElementById("high-scores-h1").style.display = "none"
    document.getElementById("savedScore").style.display = "none"
}
function displayHighScore() {
    document.getElementById("high-scores-h1").style.display = "block"
    document.getElementById("savedScore").style.display = "block"
}
function removeViewHighScore() {
    document.getElementById('high-scoresbtn').style.display = "none"
}
function displayViewHighScore() {
    document.getElementById('high-scoresbtn').style.display = "block"
}
function removeBack() {
    document.getElementById('back').style.display = "none"
}
function displayBack() {
    document.getElementById('back').style.display = "block"
}
function displayDynamicList() {
    document.getElementById('dynamicList').style.display = "block"
}
function removeDynamicList() {
    document.getElementById('dynamicList').style.display = "none"
}

answerBtn0.addEventListener('click', function () {
    console.log(qOrder, aOrder, aOrder.indexOf(qOrder[i - 1]))
    if (aOrder.indexOf(qOrder[i - 1]) == 0) {
        score++
        document.getElementById("answer0").style.background = "lightgreen"
        questionTimer()
    }
    else {
        timeLeft -= timeDecrement
        document.getElementById("answer0").style.background = "lightcoral"
        questionTimer()
    }
    if (i == questionArr.length) {
        removeQuizButtons()
        timeLeft = 1
        return displayScore(score)
    }
})
answerBtn1.addEventListener('click', function () {
    console.log(qOrder, aOrder, aOrder.indexOf(qOrder[i - 1]))
    if (aOrder.indexOf(qOrder[i - 1]) == 1) {
        score++
        document.getElementById("answer1").style.background = "lightgreen"
        questionTimer()
    }
    else {
        timeLeft -= timeDecrement
        document.getElementById("answer1").style.background = "lightcoral"
        questionTimer()
    }
    if (i == questionArr.length) {
        removeQuizButtons()
        timeLeft = 1
        return displayScore(score)
    }

})

answerBtn2.addEventListener('click', function () {
    console.log(qOrder, aOrder, aOrder.indexOf(qOrder[i - 1]))
    if (aOrder.indexOf(qOrder[i - 1]) == 2) {
        score++
        document.getElementById("answer2").style.background = "lightgreen"
        questionTimer()

    } else {
        timeLeft -= timeDecrement
        document.getElementById("answer2").style.background = "lightcoral"
        questionTimer()
    }
    if (i == questionArr.length) {
        removeQuizButtons()
        timeLeft = 1
        return displayScore(score)
    }

})

answerBtn3.addEventListener('click', function () {
    console.log(qOrder, aOrder, aOrder.indexOf(qOrder[i - 1]))
    if (aOrder.indexOf(qOrder[i - 1]) == 3) {
        score++
        document.getElementById("answer3").style.background = "lightgreen"
        questionTimer()
    }
    else {
        timeLeft -= timeDecrement
        document.getElementById("answer3").style.background = "lightcoral"
        questionTimer()
    }
    if (i == questionArr.length) {
        removeQuizButtons()
        timeLeft = 1
        return displayScore(score)
    }

})

function saveScore(highScoresArr) {
    localStorage.setItem("HighScore", JSON.stringify(highScoresArr))
}
function loadScore(highScoresArr) {
    var returnedHighScoresArr = localStorage.getItem("HighScore")
    if (!returnedHighScoresArr) {
        return false
    }
    returnedHighScoresArr = JSON.parse(returnedHighScoresArr)
    highScoresArr = returnedHighScoresArr
    return highScoresArr
}
function taskFormHandler(event) {
    event.preventDefault();
    var highScoreNameInput = document.querySelector("input[name='initials']").value;

    console.log(highScoresArr, highScoreNameInput)
    // check if inputs are empty (validate)
    if (highScoreNameInput === "") {
        alert("No initials entered");
        return false;
    } {
        removeFinalScore()
        displayDynamicList()
        displayHighScore()
        displayBack()
    }
    formEl.reset();
    highScoreArr = loadScore(highScoresArr)
    saveScore(highScoresArr)

    document.querySelector("input[name='initials']").value = "";
    highScoresArr.push({ name: highScoreNameInput, score: score })
    console.log(highScoresArr)

    saveScore(highScoresArr)
    createHighScoreEl(highScoresArr)
};
var createHighScoreEl = function (highScoresArr) {
    // create list item
    var listItemEl = document.getElementById('scores-list');

    // create div to hold task info and add to list item
    for (var i = 0; i < highScoresArr.length; i++) {
        var scoreInfoEl = document.createElement("p");
        var nameInfoEl = document.createElement("p");
        scoreInfoEl.className = "highscore-score";
        nameInfoEl.className = "highscore-name";
        nameInfoEl.innerHTML = "Name: " + highScoresArr[i].name + " "
        scoreInfoEl.innerHTML = "Score: " + highScoresArr[i].score + " "
        listItemEl.appendChild(nameInfoEl);
        listItemEl.appendChild(scoreInfoEl);
    }
    saveScore(highScoresArr)
};
function nextQuestion() {
    console.log(questions())

    aOrder = generateAnswer(i, generateQuestion(i++, qOrder, questions()), questions())
    console.log(aOrder, score)
}
function loadVariables() {
    countdown()
    qOrder = generateRandomQuestion()
    questionArr = questions()
    displayQuizButtons()
}

function startQuiz() {
    i = 0
    aOrder = loadVariables()
    removeViewHighScore()
    removeInitialPrompt();
    displayQuizButtons()
    nextQuestion()
    return aOrder
}
function viewHighScores() {
    displayBack()
    displayDynamicList()
    removeViewHighScore()
    removeInitialPrompt()
    displayHighScore()
    createHighScoreEl(highScoresArr)
}
function displayScore() {
    finalScore.textContent = "Your final score is " + score + "."
    displayFinalScore()
    console.log(score)
}
function restart() {
    i = 0
    qPoint = 0
    timeLeft = 100
    loadScore(highScoresArr)
    removeBack()
    removeHighScore()
    removeFinalScore()
    removeQuizButtons()
    removeHighScore()
    removeDynamicList()
    displayViewHighScore()
    displayInitialPrompt()
}

loadScore(highScoresArr)
removeBack()
removeHighScore()
removeFinalScore()
removeQuizButtons()
initialStartBtn.onclick = startQuiz;
viewHighScoresBtn.onclick = viewHighScores;
backbtn.onclick = restart;
formEl.addEventListener("submit", taskFormHandler);