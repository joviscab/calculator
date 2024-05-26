// Function to check if a number is an integer
function isInteger(num) {
    return num % 1 === 0;
}

//Basic functions calculator
function add(a, b) {
    let result = a + b;
    return isInteger(result) ? result.toString() : result.toFixed(2);
}
 
function subtract(a, b) {
    let result = a - b;
    return isInteger(result) ? result.toString() : result.toFixed(2);
}
 
function multiply(a, b) {
    let result = a * b;
    return isInteger(result) ? result.toString() : result.toFixed(2);
}
 
function divide(a, b) {
    if (b === 0) {
        return "w t f";
    }
    let result = a / b;
    return isInteger(result) ? result.toString() : result.toFixed(2);
}
 
//Variables calculator
let firstNumber = "";
let secondNumber = "";
let operator = "";
 
//Function operate calculator
function operate(operator, firstNumber, secondNumber) {
    let result;
    switch (operator) {
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        case "x":
            result = multiply(firstNumber, secondNumber);
            break;       
        case "÷":
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
        if (button.classList.contains("btn-number")) {
            // If the button is a number button, append the number to the appropriate number variable
            if (operator === "") {
                firstNumber += button.id;
                displayValue.textContent = firstNumber;
            } else {
                secondNumber += button.id;
                displayValue.textContent = secondNumber;
            }
        } else if (button.id === "." && !((operator === "" && firstNumber.includes(".")) || (operator !== "" && secondNumber.includes(".")))) {
            // If the button is a decimal point and the current number doesn't already contain a decimal point, append it
            if (operator === "") {
                firstNumber += ".";
                displayValue.textContent = firstNumber;
            } else {
                secondNumber += ".";
                displayValue.textContent = secondNumber;
            }
        }
    });
});
 
//Functions to clear the display
document.getElementById("C").onclick = function() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayValue.textContent = "";
};
 
document.getElementById("AC").onclick = function() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayValue.textContent = "";
};
 
//Function to handle operator button clicks
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("btn-operator")) {
            operator = button.id;
            displayValue.textContent = "";
        }
    });
});
 
//Function to operate with the equals button
document.getElementById("=").onclick = function() {
    let result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber)); 
    displayValue.textContent = result;
};
