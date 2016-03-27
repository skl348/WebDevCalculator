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
    
    var result = outputVal + num;

    setEltToVal(outputElt, result);
}
 
function subtractNum(num) {
    var outputElt = document.getElementById('output');
    var outputVal = Number(outputElt.innerHTML);
 
    var result = outputVal - num;

    setEltToVal(outputElt, result);
}

// sets innerhtml of passed in element to passed in value
function setEltToVal(elt, val) {

    /*
    var prevVal = Number(elt.innerHTML);
    if (prevVal != val)
    {
        if (prevVal > val)

    }
    */
    elt.innerHTML = val;

    /* add random pic to some random location on page*/

    var randX = Math.random() * documentWidth();
    var randY = Math.random() * documentHeight();
    console.log('(' + randX, randY + ')');

    var elem = document.createElement("img");
    elem.setAttribute("width", "150px");
    elem.setAttribute("alt", "cat 0");
    elem.src = "img/0.svg";
    elem.style.cssText = 'position:absolute; top:' + randY + 'px; left:' + randX + 'px; z-index:0;';
    document.body.appendChild(elem);
}


function documentHeight() {
    return Math.max(
        document.documentElement.clientHeight,
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
    );
}

function documentWidth() {
    return Math.max(
        document.documentElement.clientWidth,
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth
    );
}