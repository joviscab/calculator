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
let previousResult = "";
 
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
            if (operator === "") {
                firstNumber += button.id;
                displayValue.textContent = firstNumber;
            } else {
                secondNumber += button.id;
                displayValue.textContent = secondNumber;
            }
        } else if (button.id === "." && !((operator === "" && firstNumber.includes(".")) || (operator !== "" && secondNumber.includes(".")))) {
            if (operator === "") {
                firstNumber += ".";
                displayValue.textContent = firstNumber;
            } else {
                secondNumber += ".";
                displayValue.textContent = secondNumber;
            }
        }

        if (button.id === "." && displayValue.textContent.includes(".")) {
            button.disabled = true;
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

//Function to clear the display
document.getElementById("C").onclick = function() {
    if (secondNumber !== "") {
        secondNumber = "";
        displayValue.textContent = firstNumber + operator;
    } else if (operator !== "") {
        operator = "";
        displayValue.textContent = firstNumber;
    } else {
        firstNumber = "";
        displayValue.textContent = "";
    }
    document.getElementById(".").disabled = false;
};




 
document.getElementById("AC").onclick = function() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    previousResult = "";
    displayValue.textContent = "";
};
 
//Function to handle operator button clicks
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("btn-operator")) {
            operator = button.id;
            displayValue.textContent = "";
            document.getElementById(".").disabled = false;
        }
    });
});
 
//Function to operate with the equals button
document.getElementById("=").onclick = function() {
    let result;
    if (previousResult !== "") {
        // Use the previous result as the first number
        result = operate(operator, parseFloat(previousResult), parseFloat(secondNumber));
    } else {
        result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    }
    displayValue.textContent = result;
    previousResult = result; 
    firstNumber = ""; 
    secondNumber = ""; 
    document.getElementById(".").disabled = false;
};

//Add event listeners for keyboard input
document.addEventListener("keydown", (event) => {
    const key = event.key;
    const isNumber = /^\d$/.test(key);
    const isOperator = "+-x÷".includes(key);
    const isEquals = key === "=" || key === "Enter";
    const isDecimal = key === ".";

    if (isNumber) {
        if (operator === "") {
            firstNumber += key;
            displayValue.textContent = firstNumber;
        } else {
            secondNumber += key;
            displayValue.textContent = secondNumber;
        }
    }

    if (isOperator) {
        operator = key;
        displayValue.textContent = "";
    }

    if (isDecimal && !((operator === "" && firstNumber.includes(".")) || (operator !== "" && secondNumber.includes(".")))) {
        if (operator === "") {
            firstNumber += ".";
            displayValue.textContent = firstNumber;
        } else {
            secondNumber += ".";
            displayValue.textContent = secondNumber;
        }
    }

    if (isEquals) {
        let result;
        if (previousResult !== "") {
            result = operate(operator, parseFloat(previousResult), parseFloat(secondNumber));
        } else {
            result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        }
        displayValue.textContent = result;
        previousResult = result;
        firstNumber = "";
        secondNumber = "";
        document.getElementById(".").disabled = false;
    }
});

//Sound button
const musicButton = document.getElementById('musicButton');
const audio = new Audio('pctheme.mp3');

musicButton.addEventListener('click', () => {
    audio.play();
});