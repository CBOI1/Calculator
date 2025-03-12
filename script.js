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
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        default:
            return divide(a, b);
    }
}
//track state of calculator
let val1 = null;
let val2 = null;
let operator = null;
//State of display for UI
let displayVal = 0;
let clearOnInput = false;

const digitButtons = document.querySelectorAll(".digit-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const display = document.querySelector(".display");

digitButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
        if (clearOnInput) {
            displayVal = 0;
            clearOnInput = false;
        }
        let digit = +e.target.textContent;
        displayVal = (displayVal * 10) + digit;
        display.textContent = displayVal;
    });
});

operatorButtons.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", (e) => {
        const selectedOperator = e.target.textContent;
        if (val1 === null && selectedOperator === "=") {
            return;
        } else if (val1 === null) {
            val1 = displayVal;
            operator = selectedOperator;
        } else {
            //process currently selected operator before updating
            displayVal = operate(operator, val1, displayVal);
            val1 = null;
            val2 = null;
            operator = selectedOperator;
            display.textContent = displayVal;
        }
        clearOnInput = true;
    });
})








