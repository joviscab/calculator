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
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        case "*":
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
            displayValue.textContent += button.id;
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

//Function to get the first number
buttons.forEach((button) => {
    console.log(`Adding event listener to button with id: ${button.id} and class: ${button.className}`);
    button.addEventListener("click", () => {
        console.log(`Button clicked with id: ${button.id} and class: ${button.className}`);
        if (button.classList.contains("btn-operator")) {
            operator = button.id;
            firstNumber = displaytxt.textContent;
            console.log(`First number set to: ${firstNumber}`);
            displaytxt.textContent = "";
        }
    });
});

//Function to get the second number
buttons.forEach((button) => {
    console.log(`Adding event listener to button with id: ${button.id} and class: ${button.className}`);
    button.addEventListener("click", () => {
        console.log(`Button clicked with id: ${button.id} and class: ${button.className}`);
        if (button.classList.contains("btn-equals")) {
            secondNumber = displaytxt.textContent;
            console.log(`Second number set to: ${secondNumber}`);
            displaytxt.textContent = "";
        }
    });
});

//Function to operate with the equals button
document.getElementById("=").onclick = function() {
    console.log(`Using operator: ${operator}`);
    let result = operate(operator, parseInt(firstNumber), parseInt(secondNumber)); 
    displaytxt.textContent = result;
};