// 문제 1)
// 전역변수와 지역변수에 대한 자세한 고찰을 더 해야겠다 -> Deep Dive Javascript 공부해야 겠다...
const year = 2024;
const birth = 1999;

function calculateAge() {
  let age = year - birth;
  return age;
}

console.log("나는 %d세 입니다.", calculateAge());

// 문제 2)
const myAge = 25;
var myYear = 2024 - myAge;
console.log("나는 %d년도에 태어났습니다", myYear);

// 문제 3)
const numOfApples = 123;
console.log(numOfApples % 10);
console.log(parseInt(numOfApples / 10) + (numOfApples % 10 == 0 ? 0 : 1));

// prac

function prac() {
  var str1 = "hellop";
}

console.log(str1);

var x = "global";

function foo() {
  var x = "function scope";
  console.log(x);
}

foo(); // ?
console.log(x); // ?
