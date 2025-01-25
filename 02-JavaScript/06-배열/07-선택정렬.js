const data = [9, 1, 2, 8, 3, 6, 4, 7, 5];
console.log(`before selection sort: ${data}`);

// for (let i = 0; i < data.length; i++) {
//   for (let j = 0; j < data.length; j++) {
//     if (data[i] < data[j]) {
//       const tmp = data[j];
//       data[j] = data[i];
//       data[i] = tmp;
//     }
//   }
// }

for (let i = 0; i < data.length - 1; i++) {
  for (let j = i + 1; j < data.length; j++) {
    if (data[i] > data[j]) {
      const tmp = data[i];
      data[i] = data[j];
      data[j] = tmp;
    }
  }
}

console.log(`after selection sort: ${data}`);
