const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field (입력 필드에서 입력값 가져옴)
function getUserNumberInput() {
    return parseInt(userInput.value);
}
// Generates and writes calculation log (계산 로그 생성과 작성)
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); //from vendor file
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult ,//객체내에서 키값:인자의 이름
        number: operationNumber,  
        result: newResult   
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
//하위 조건문이 전부 참이어야 참을 반환한다.
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPY' &&
        calculationType !== 'DIVIDE'
    ) {
        return;
    } 
// //하위 조건문 중 하나이상 참이면 참을 반환한다.
// if (
//     calculationType !== 'ADD' ||
//     calculationType !== 'SUBTRACT' ||
//     calculationType !== 'MULTIPY' ||
//     calculationType !== 'DIVIDE'
// )
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult +=enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculateResult, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('add');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add); //클릭이 발생할 때 함수를 실행하도록함.
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

