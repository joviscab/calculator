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

//Function operate calculator
function operate(operator, firstNumber, secondNumber) {
    let result;
    switch (operator) {
        case add:
            result = add(firstNumber, secondNumber);
            break;
        case subtract:
            result = subtract(firstNumber, secondNumber);
            break;
        case multiply:
            result = multiply(firstNumber, secondNumber);
            break;       
        case divide:
            result = divide(firstNumber, secondNumber);
            break;     
        default:
            throw new Error("Unknown operator");
    }
    return result;
}
