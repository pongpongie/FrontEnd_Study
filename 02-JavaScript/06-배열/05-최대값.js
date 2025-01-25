const data = [5, 2, 7, 9, 2];

let max = data[0];

for (let i = 0; i < data.length; i++) {
  if (max <= data[i]) {
    max = data[i];
  }
}
console.log(max);
