function questions(){
    var questionArr = [
        {q:"How do you iterate through an array?", a:"for loops"},
        {q:"Conditional Statement considering 'either or", a:"if/else"},
        {q:"Continues running till all parameters are met, may complete an action before running", a:"do..while" },
        {q:"Ends looping, regardless of conditions met", a:"break" },
        {q:"Keeps moving through iterations, ignoring code below it", a:"continue"},
        {q:"Emmet code to quickly enter initial index code", a:"html:5"},
        {q:"Append array in javascript", a:"push"},
        {q:"Removes last element of an array", a:"pop"},
        {q:"Position of element in an array", a:"index"},
        {q:"Terminology used to change datatypes", a:"parse"}
    ]
    // if(attr == 'q')
    // return questionArr[i].q
    // else if(attr =='a')
    // return questionArr[i].a

    return questionArr
}
function questionOrder() {
    var questionArr = questions()
    var qOrder = []
    var min = 0
    var max = 9
    var number 
    while(qOrder.length < questionArr.length)
    {
        number = getRandom(min,max)
        if(qOrder.indexOf(number) == -1)
        qOrder.push(number)
    }
    console.log(qOrder)
    return qOrder
}
function generateQuestion(i)
{
    var questionArr = questions()
    var randomOrder = questionOrder()
    var body = document.body
    var questionEl = document.createElement("h2")
    
    questionEl.textContent = questionArr[randomOrder[i]].q

    body.appendChild(questionEl)
}
//Random number generator inclusive
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

console.log(questions())
questionOrder()
questionArr = questions()
for(var i = 0; i< questionArr.length; i++)
generateQuestion(i)