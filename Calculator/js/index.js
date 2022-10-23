var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDevide = document.getElementById("buttonDevide");
var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");

function buttonFunction(countTheNumber) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    if (countTheNumber === "+") {
        var result = number1 + number2;
    } else if (countTheNumber === "-") {
        var result = number1 - number2; 
    } else if (countTheNumber === "*") {
        var result = number1 * number2;
    } else if (countTheNumber === "/") {
        var result = number1 / number2;
    } else {
        window.alert("operation is not a found");
    }
    window.alert(result);  
}

function allButtonFunction(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    buttonFunction(operation);
}

buttonPlus.addEventListener("click", allButtonFunction);
buttonMinus.addEventListener("click", allButtonFunction);
buttonMultiply.addEventListener("click", allButtonFunction);
buttonDevide.addEventListener("click", allButtonFunction);