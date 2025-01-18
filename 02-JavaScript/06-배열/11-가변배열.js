const a = [1, 3, 5, 7, 9];
const b = [2, 4, 6, 8];

const arr = [a, b];
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
