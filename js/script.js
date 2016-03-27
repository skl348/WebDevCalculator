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
        // if addition operation is performed, adds that number of cats to page
        // if subtraction operation is performed, adds that number of dogs to the page
        if (operator != '' && rightOperand != '')
        {
            var num = Number(rightOperand);
            if (operator === '+')
            {
                console.log("adding now");
                addNum(num);

                // add (num) # of cats to the page

            }

            else if (operator === minusSignStr)
            {
                console.log("subtracting now");
                subtractNum(num);

                // add (num) # of dogs to the page

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

    if (outputVal >= 0)
    {
        // (num) MORE CATS!
        addXAnimalsFromStartIdY(num, outputVal, 0);
    }

    // outputVal < 0
    else
    {
        if (result < 0)
        {
            // remove num images (dogs)
            for (var i = 0; i < num; i++)
            {
                var elem = document.getElementById("img" + i);
                elem.remove();
            }
        }
        else
        {
            // clear all imgs
            var numDogs = Math.abs(outputVal);
            for (var i = 0; i < numDogs; i++)
            {
                var elem = document.getElementById("img" + i);
                elem.remove();
            }
            if (result > 0)
            {
                // (result) MORE CATS! id starts from 0
                addXAnimalsFromStartIdY(result, 0, 0);
            }
        }
    }




    //addXCatsFromStartIdY(num, 0);
}
 
function subtractNum(num) {
    var outputElt = document.getElementById('output');
    var outputVal = Number(outputElt.innerHTML);
 
    var result = outputVal - num;

    setEltToVal(outputElt, result);

    if (outputVal <= 0)
    {
        // (num) MORE DOGS!
        addXAnimalsFromStartIdY(num, Math.abs(outputVal), 1);
    }

    // outputVal > 0
    else
    {
        if (result > 0)
        {
            // remove num images (cats)
            for (var i = 0; i < num; i++)
            {
                var elem = document.getElementById("img" + i);
                elem.remove();
            }
        }
        else
        {
            // clear all imgs
            var numCats = Math.abs(outputVal);
            for (var i = 0; i < numCats; i++)
            {
                var elem = document.getElementById("img" + i);
                elem.remove();
            }
            if (result < 0)
            {
                // (result) MORE DOGS! id starts from 0
                addXAnimalsFromStartIdY(Math.abs(result), 0, 1);
            }
        }
    }

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

    /*
    var randX = Math.random() * documentWidth();
    var randY = Math.random() * documentHeight();
    console.log('(' + randX, randY + ')');

    addImgToDOM(randX, randY, "img/0.svg", 0);
    */
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

// creates an img element and adds it to a random location on the page
// given a string for src attr of element and id (number) 
// img tags will have id's of the form "img#" # being id #
function addImgToDOM(x, y, srcStr, id) {
    var elem = document.createElement("img");
    
    elem.setAttribute("width", "150px");
    elem.setAttribute("alt", "im kawaii");
    elem.setAttribute("id", "img" + id);
    elem.src = srcStr;
    elem.style.cssText = 'position:absolute; top:' + y + 'px; left:' + x + 'px; z-index:0;';
    document.body.appendChild(elem);
}

// adds x imgs to the page with ids starting from y, increments per img placed
// if animalType == 0 will place cats, if animalType == 1 will place dogs
// for both types, have names [0-8].html
function addXAnimalsFromStartIdY(x, y, animalType) {
    var folderPath = "img/";
    if (animalType == 0)
        folderPath += "cats/";
    else if (animalType == 1)
        folderPath += "dogs/";
    var currId = y;
    for(var i = 0; i < x; i++)
    {
        var num = generateRandNum(0,8); // random num for image selection
        var srcPath = folderPath + num + ".svg";

        // generate random x,y for each cat
        var randX = Math.random() * documentWidth();
        var randY = Math.random() * documentHeight();
        addImgToDOM(randX, randY, srcPath, currId);
        currId++;
    }
}