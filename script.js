const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

let prevNumber ="";
let calculationOperator ="";
let currentNumber ="";
const inputNumber = (number) => {
    if (currentNumber === "0") {
    currentNumber = number;
    } else {
    currentNumber += number;
    };
};

const numbers = document.querySelectorAll(".number");

    numbers.forEach ((number) => {
        number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber); 
    });
});

const inputOperator = (operator) => {
    if (calculationOperator ===""){
        prevNumber = currentNumber;
    };
    calculationOperator = operator;
    currentNumber= "0";
};

const operators = document.querySelectorAll(".operator,.percentage");

operators.forEach ((operator) => {
    operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
    updateScreen(prevNumber + calculationOperator);
    });
});

const calculate = () => {
    let result = "";
    switch (calculationOperator) {
        case '+':
        result = parseFloat(prevNumber) + parseFloat(currentNumber);
        break;
        case '-':
        result = parseFloat(prevNumber) - parseFloat(currentNumber);
        break;
        case '*':
        result = parseFloat(prevNumber) * parseFloat(currentNumber);
        break;
        case '/':
        result = parseFloat(prevNumber) / parseFloat(currentNumber);
        break;
        case '%':
        result = parseFloat(prevNumber) / 100;
        break;
        default:
        return;
    };
currentNumber = result;
calculationOperator = "";
};

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});

const clearAll = () => {
    prevNumber = "";
    calculationOperator = "";
    currentNumber= "";
};

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () =>{
    clearAll();
    updateScreen(currentNumber);
});

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber += dot;
};

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
inputDecimal(event.target.value);
updateScreen(currentNumber);
});
