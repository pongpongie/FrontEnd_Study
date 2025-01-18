const times = [7, 5, 5, 5, 5, 10, 7];
let sum = 0;

for (let i = 0; i < times.length; i++) {
  i <= 3 ? (sum += times[i] * 4500) : (sum += times[i] * 5200);
}

console.log(sum);

// const times = [7, 5, 5, 5, 5, 10, 7];
// let sum = 0;

// for (let i = 0; i < times.length; i++) {
//   if (i <= 3) {
//     sum += times[i] * 4500;
//   } else {
//     sum += times[i] * 5200;
//   }
// }

// console.log(sum);
