const min = 0
const max = 9
const body = document.body
const h2QEl = document.getElementById("question")

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



var timerEl = document.getElementById('countdown');


function countdown() {
    var timeLeft = 99;
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

var i = 0;
var qOrder;
var questionArr
var maxAnswers = 4

var startBtn = document.getElementById('start');
startBtn.onclick = startQuiz;
var answerBtn0 = document.querySelector('#answer0')
var answerBtn1 = document.querySelector('#answer1')
var answerBtn2 = document.querySelector('#answer2')
var answerBtn3 = document.querySelector('#answer3')
removeButtons();
function removeButtons(){
document.getElementById("question").style.display = "none"
document.getElementById("answer0").style.display = "none"
document.getElementById("answer1").style.display = "none"
document.getElementById("answer2").style.display = "none"
document.getElementById("answer3").style.display = "none"
}
function displayButtons(){
    document.getElementById("question").style.display = "block"
    document.getElementById("answer0").style.display = "block"
    document.getElementById("answer1").style.display = "block"
    document.getElementById("answer2").style.display = "block"
    document.getElementById("answer3").style.display = "block"
}
//var btnClick = document.querySelector('#answer' + j)
var score = 0;
answerBtn0.addEventListener('click', function()
{
    console.log(qOrder,aOrder,aOrder.indexOf(qOrder[i-1]))
    if(aOrder.indexOf(qOrder[i-1])==0)
    score++
    
    if(i == questionArr.length)
    {
        return console.log("end of quiz")
    }
    nextQuestion()
})
answerBtn1.addEventListener('click', function()
{
    console.log(qOrder,aOrder,aOrder.indexOf(qOrder[i-1]))
    if(aOrder.indexOf(qOrder[i-1])==1)
    score++
    
    if(i == questionArr.length)
    {
        return console.log("end of quiz")
    }
    nextQuestion()
})

answerBtn2.addEventListener('click', function()
{
    console.log(qOrder,aOrder,aOrder.indexOf(qOrder[i-1]))
    if(aOrder.indexOf(qOrder[i-1])==2)
    score++
    
    if(i == questionArr.length)
    {
        return console.log("end of quiz")
    }
    nextQuestion()
})

answerBtn3.addEventListener('click', function()
{
    console.log(qOrder,aOrder,aOrder.indexOf(qOrder[i-1]))
    if(aOrder.indexOf(qOrder[i-1])==3)
    score++
    
    if(i == questionArr.length)
    {
        return console.log("end of quiz")
    }
    nextQuestion()
})

function loadVariables() {
    countdown()
    qOrder = generateRandomQuestion()
    questionArr = questions()
    displayButtons()
}

function nextQuestion() {
    console.log(questions())

    aOrder=generateAnswer(i, generateQuestion(i++, qOrder, questions()), questions())
    console.log(aOrder,score)
}
function startQuiz() {
    aOrder = loadVariables()
   nextQuestion()
   return aOrder
}