const a = [1, 2];
const b = [4, 5, 6, 7];

const myArr1 = [a, b];
console.log(myArr1);

let myArr2 = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(myArr2);
console.log(myArr2[0]);
console.log(myArr2[1]);

console.log(myArr2[0][0]);
console.log(myArr2[0][1]);
console.log(myArr2[0][2]);
console.log(myArr2[1][0]);
console.log(myArr2[1][1]);
console.log(myArr2[1][2]);

const c = new Array(10, 20, 30);
const d = new Array(40, 50, 60);

const e = new Array(c, d);

console.log(c);
console.log(d);
console.log(e);
