// script.js
let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return; // No operation if no input
    firstOperand = currentInput;
    operator = op;
    currentInput = '';
}

function calculate() {
    if (firstOperand === '' || currentInput === '' || operator === '') return;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(currentInput);
    let result;
    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    display.value = result;
    currentInput = result;
    operator = '';
    firstOperand = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    display.value = '';
}
