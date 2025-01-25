let arr = new Array(
  new Array(5),
  new Array(5),
  new Array(5),
  new Array(5),
  new Array(5)
);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] = i == j ? 1 : 0;
  }
}

console.log(arr);
