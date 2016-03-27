

var operator;
 
var numbers = document.getElementsByClassName('num');
var operators = document.getElementsByClassName('op');
 
 
 
 
for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', numClicked);
}
 
for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', opClicked);
}
 
/* 
    Source: StackOverflow 
    http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
*/ 
function generateRandNum(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
 
function numClicked(e) {

    var num = Number(e.target.innerHTML);
    console.log(e.target.innerHTML);
    /*
    var outputElt = document.getElementById('output');
    var outputVal = outputElt.innerHTML;
    outputVal = Number(outputVal);
 
    if (operator === '-') {
        console.log('subtract this number');
        // we could just do the math here,
        // but instead we are calling another function (below)
        subtractNum(num, outputVal);
    }
    else if (operator === '+') {
        console.log('add this number');
        // we could just do the math here,
        // but instead we are calling another function (below)
        addNum(num, outputVal);
    }
    */
}
 
// Event Listener when an item with the class operator is clicked
function opClicked(e) {
 
    // if not equal sign op, change eq var
    var opStr = e.target.innerHTML;
    if (opStr != '=') {
        operator = opStr;
        console.log('operator changed to:', operator);
    }
    
    // equal sign op pressed
    else {

    }

    console.log('op is:', opStr);
}

 
 
 
/** calculator methods are called from numClicked **/
function addNum(num, outputVal) {
    var outputElt = document.getElementById('output');
 
    // do +
    outputElt.innerHTML = num + outputVal;
}
 
// subtracts number from output
function subtractNum(num, outputVal) {
    var outputElt = document.getElementById('output');
 
    // do -
    outputElt.innerHTML = outputVal - num;
}