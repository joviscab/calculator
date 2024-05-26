//Basic functions calculator
function add(a, b) {
   return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Wtf dude?");
    }
    return a / b;
}

//Variables calculator
let firstNumber;
let secondNumber;
let operator;

//Function operate calculator
function operate(operator, firstNumber, secondNumber) {
    let result;
    switch (operator) {
        case "add":
            result = add(firstNumber, secondNumber);
            break;
        case "subtract":
            result = subtract(firstNumber, secondNumber);
            break;
        case "multiply":
            result = multiply(firstNumber, secondNumber);
            break;       
        case "divide":
            result = divide(firstNumber, secondNumber);
            break;     
        default:
            throw new Error("Unknown operator");
    }
    return result;
}

//Functions to populate the display
const buttons = document.querySelectorAll("button");
let displayValue = document.getElementById("displaytxt");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.className = "btn-number") {
            displaytxt.textContent += button.id;
        }
            

    });
});

//Functions to clear the display
document.getElementById("C").onclick = function() {
    displaytxt.textContent = "";
}

document.getElementById("AC").onclick = function() {
    displaytxt.textContent = "";
}



//Function to operate with th equals button
document.getElementById("=").onclick = function() {
    operate(operator, firstNumber, secondNumber); 
    displaytxt.textContent = result;
}