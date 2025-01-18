const items = [
  [291, 500],
  [586, 320],
  [460, 100],
  [558, 120],
  [18, 92],
  [72, 30],
];

let sum = 0;
for (let i = 0; i < items.length; i++) {
  for (let j = 0; j < items[i].length - 1; j++) {
    sum += items[i][j] * items[i][j + 1] * 0.9;
  }
}

console.log("총합: ", sum);
