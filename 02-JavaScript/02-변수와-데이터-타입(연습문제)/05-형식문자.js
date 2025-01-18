const num = 123.45;
const str = "hello";
const bool = true;

const obj = new Date();
const arr = [1, 2, 3];
const json = { a: 123, b: 456 };

console.group("숫자 값으로 출력하기");
console.log("숫자값 출력하기= %d", num);
console.log("숫자값 출력하기= %d", str);
console.log("숫자값 출력하기= %d", bool);
console.log("숫자값 출력하기= %d", obj);
console.log("숫자값 출력하기= %d", arr);
console.log("숫자값 출력하기= %d", json);
console.groupEnd();

console.group("문자열로 출력하기");
console.log("문자열 출력하기= %s", num);
console.log("문자열 출력하기= %s", str);
console.log("문자열 출력하기= %s", bool);
console.log("문자열 출력하기= %s", obj);
console.log("문자열 출력하기= %s", arr);
console.log("문자열 출력하기= %s", json);
console.groupEnd();

const student = "이시현";
const age = 20;
console.group("복합 사용");
console.log("%s님의 나이는 %d세 입니다.", student, age);
console.groupEnd();
