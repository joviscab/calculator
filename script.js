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
        switch (button.id) {
            case "0":
                displaytxt.textContent += button.id;
                break;
            case "1":
                displaytxt.textContent += button.id;
                break;
            case "2":
                displaytxt.textContent += button.id;
                break;    
            case "3":
                displaytxt.textContent += button.id;
                break;
            case "4":
                displaytxt.textContent += button.id;
                break;
            case "5":
                displaytxt.textContent += button.id;
                break;
            case "6":
                displaytxt.textContent += button.id;
                break;
            case "7":
                displaytxt.textContent += button.id;
                break;
            case "8":
                displaytxt.textContent += button.id;
                break;
            case "9":
                displaytxt.textContent += button.id;
                break;
            case ".":
                displaytxt.textContent += button.id;
                break;
            case "C":
                displaytxt.textContent = "";
                break;
            case "AC":
                displaytxt.textContent = "";
                break;
            case "x":
                let firstNumber = parseFloat(displaytxt.textContent);
                console.log(firstNumber);
                displaytxt.textContent = "";

//How to solve this shiiiiiiiit

                let secondNumber = parseFloat(displaytxt.textContent);
                console.log(secondNumber);
                operate("multiply", firstNumber, secondNumber);
                let result;
                displaytxt.textContent = result;
                break;
        }
       
    });
});