const a = 5;
const b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);

const x = 5;
const y = 3;
const z = x + y - 2; // 이후 재할당이 안되는 것이지 동적인 계산은 가능
// const z = 1;
console.log(z);

const value1 = 10;
const value2 = 4;
console.log(value1 / value2);

// js 부동소수점 표현 방식?
const value3 = 4;
const value4 = 3;
console.log(value3 / value4);

const str1 = "Hello";
const str2 = " World!";
console.log(str1 + str2);

// + 연산자에 덧셈 하나라도 있으면 문자열 처리
// 왜 중요하냐, 송금 시스템에서 1000 + 500원 했는데 둘 다 문자열로 처리되면 1000500원 송금 가능;;
let str3 = "안녕하세요" + 123;
console.log(str3);
console.log(typeof str3);

let str4 = "안녕하세요" + true;
console.log(str4);
console.log(typeof str4);
