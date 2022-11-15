
//  함수
//스크립트를 실행하기 전에 자동으로 모든 함수를 등록함. -> 함수를 두는 위치는 상관X
const defaultResult = 0;
let currentResult = defaultResult;

function add(number1, number2) {
    //함수의 내용과 작동 방법을 정의
    const result = number1 + number2;
    return result;
    //return : result에 저장된 값을 반환
}
// block scope: The scope created with a pair of a block(curly braces)
//declare a variable within a function, it is called a local variable, because it is available only within that function.

const additionResult = add(10, 20);

currentResult = additionResult;

let calculationDescription = `(${defaultResult} + 10) * 5`;     //(0 + 10) * 5 출력  
//`{변수 또는 상수}` --> Template literals
//계산의 결과 또는 변수나 상수에 저장된 값 등의 동적인 값을 텍스트 내부에 주입하고자 할 때

outputResult(currentResult, calculationDescription);