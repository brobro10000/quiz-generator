const min = 0
const max = 9
function questions(){
    var questionArr = [
/*0*/        {q:"How do you iterate through an array?", a:"for loops"},
/*1*/        {q:"Conditional Statement considering 'either or'", a:"if/else"},
/*2*/        {q:"Continues running till all parameters are met, may complete an action before running", a:"do..while" },
/*3*/        {q:"Ends looping, regardless of conditions met", a:"break" },
/*4*/        {q:"Keeps moving through iterations, ignoring code below it", a:"continue"},
/*5*/        {q:"Emmet code to quickly enter initial index code", a:"html:5"},
/*6*/        {q:"Append array in javascript", a:"push"},
/*7*/        {q:"Removes last element of an array", a:"pop"},
/*8*/        {q:"Position of element in an array", a:"index"},
/*9*/        {q:"Terminology used to change datatypes", a:"parse"}
    ]
    return questionArr
}
function generateRandomQuestion() {
    var questionArr = questions()
    var qOrder = []
    var number 
    while(qOrder.length < questionArr.length)
    {
        number = getRandom(min,max)
        if(qOrder.indexOf(number) == -1)
        qOrder.push(number)
    }
    console.log("Order of questions in the array qOrder: " + qOrder)
    return qOrder
}
function generateQuestion(i,randomOrder,questionArr)
{
    var body = document.body
    var questionEl = document.createElement("h2")
    
    questionEl.textContent = questionArr[randomOrder[i]].q

    body.appendChild(questionEl)
    return randomOrder
}
function generateAnswer(i,qOrder, questionArr){
    var body = document.body
    var aOrder = []
    var maxAnswers = 4
    var number
    aOrder = generateRandomAnswers(maxAnswers)
     console.log("Index of all random answers from questionsArr " + aOrder, "\nIndex of question from random question: " + qOrder[i], "\nIndex of correct answer from aOrder array: " + aOrder.indexOf(qOrder[i]))
    for(var i = 0; i < aOrder.length; i++){
    var answerEl = document.createElement("h3")    
    answerEl.textContent = questionArr[aOrder[i]].a
    body.appendChild(answerEl)
    }
}
function generateRandomAnswers(maxAnswers) {
    var aOrder = []
    var number
    while(aOrder.length < maxAnswers)
    {
        number = getRandom(min,max)
        if(aOrder.indexOf(number) == -1)
        aOrder.push(number)
    }
    if(aOrder.indexOf(qOrder[i])==-1)
    return generateRandomAnswers(maxAnswers)
    return aOrder
}
//Random number generator inclusive
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

console.log(questions())
questionArr = questions()
qOrder = generateRandomQuestion()
for(var i=0;i<questionArr.length;i++)
generateAnswer(i,generateQuestion(i,qOrder,questions()),questions())