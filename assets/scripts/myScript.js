//목표: 입력칸에 숫자를 입력하면 이 숫자가 앞서 입력했던 마지막 숫자에 더해지게 함.

// Variables & Constants
// A "data constainer"/"data storage"
// let + Variables = values
// 생성, 도입할 때에만 사용


// const : the value must not change!
// 변하지 않는 값을 저장할 때, 중앙에서 일괄적으로 초기화를 하기 위함.
// Use constants as often as possible. clear about my intentions.

//변수와 상수는 사용하기 전에 먼저 선언해야함.
//선언은 한 번만 해야함.
//------------------------------------------------------------------------

//  값 띄우기
/*
let currentResult = 0;

currentResult = (currentResult + 10) * 5;

outputResult(currentResult,'');
*/



//  문자열, 상수

const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 5;       // 50출력

let calculationDescription = `(${defaultResult} + 10) * 5`;     //(0 + 10) * 5 출력  
//`{변수 또는 상수}` --> Template literals
//계산의 결과 또는 변수나 상수에 저장된 값 등의 동적인 값을 텍스트 내부에 주입하고자 할 때


let errorMessage = 'An error \n' + 'occurred!';     //줄바꿔 출력(white-space: pre;)
let errorMessage01 = '\'An error \'' + 'occurred!'; //apostrophe 출력
let errorMessage02 = 'An error \\' + 'occurred!';   //Backslash 출력

outputResult(currentResult, errorMessage02); 


