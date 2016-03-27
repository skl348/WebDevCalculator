// to make the clicking of minus html entity to work
var minusSignStr = decodeHtml('&#x2212');
// operation to perform
var operator = '';
// right operand of the operation 
var rightOperand = '';
 
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

    // concat digit to rightOperand
    rightOperand += e.target.innerHTML;
    console.log(e.target.innerHTML);
    console.log(rightOperand);
    
    var outputElt = document.getElementById('output');
    var outputVal = Number(outputElt.innerHTML);

}
 
// Event Listener when an item with the class operator is clicked
function opClicked(e) {
 
    // if not equal sign op, change eq var
    var opStr = e.target.innerHTML;
    if (opStr != '=') {
        operator = opStr;
        console.log('operator changed to:(', operator,')');
    }
    
    // equal sign op pressed
    else {
        // if op and operand selected, do calculation
        if (operator != '' && rightOperand != '')
        {
            var num = Number(rightOperand);
            if (operator === '+')
            {
                console.log("adding now");
                addNum(num);
            }

            else if (operator === minusSignStr)
            {
                console.log("subtracting now");
                subtractNum(num);
            }


        }
        // reset operator & operand
        operator = '';
        rightOperand = '';


    }

    console.log('op is:', opStr);
}

 // to decode html entity 
 // Source: http://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it
 function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
 

function addNum(num) {
    var outputElt = document.getElementById('output');
    var outputVal = Number(outputElt.innerHTML);
 
    // add and replace
    outputElt.innerHTML = outputVal + num;
}
 
function subtractNum(num) {
    var outputElt = document.getElementById('output');
    var outputVal = Number(outputElt.innerHTML);
 
    // subtract and replace
    outputElt.innerHTML = outputVal - num;
}