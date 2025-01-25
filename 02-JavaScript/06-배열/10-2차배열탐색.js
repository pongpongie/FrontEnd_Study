const myArr = [
  [1, 2, 3],
  [4, 5, 6],
];

for (let i = 0; i < myArr.length; i++) {
  console.group(i + "번째 행 ---------");
  console.log(myArr[i]);
  for (let j = 0; j < myArr[i].length; j++) {
    console.log(myArr[i][j]);
  }
  console.groupEnd();
}

// for ~ of 문 탐색
console.group("2차 배열 탐색");

const myArr2 = [
  [1, 2, 3],
  [4, 5, 6],
];

for (const elem of myArr2) {
  console.log(elem);
  for (const sub of elem) {
    console.log(sub);
  }
}
console.groupEnd();
