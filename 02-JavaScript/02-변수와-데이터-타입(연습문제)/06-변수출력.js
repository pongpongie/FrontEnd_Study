const a = "Hello";

// 문자열 안에 js 변수를 넣어서 출력하고 싶을 때 사용하는 백틱(`)
console.log(`${a} world`);
console.log(`${a}`);

const myName = "민수";
const myAge = 20;

const myMessage = `${myName}님의 나이는 ${myAge}세 입니다.`;

console.log(myMessage);

// 백틱(`)도 문자열
const backtick = ``;
console.log(typeof myMessage);
console.log(typeof backtick);
