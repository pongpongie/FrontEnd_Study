const myArr = new Array(5);
console.log(myArr);

const len = myArr.length;

for (let i = 0; i < len; i++) {
  myArr[i] = i * 10;
}

console.log(myArr);

console.group("1차 배열 탐색");

const data = [4, 5, 2, 1, 3];

for (const item of data) {
  console.log(item);
}
console.groupEnd();
