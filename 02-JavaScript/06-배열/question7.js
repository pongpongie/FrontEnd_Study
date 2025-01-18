const money = [209000, 109000, 119000, 109000, 94000];

// bubble sort
for (let i = 0; i < money.length; i++) {
  for (let j = 0; j < money.length - i; j++) {
    if (money[j] > money[j + 1]) {
      const tmp = money[j + 1];
      money[j + 1] = money[j];
      money[j] = tmp;
    }
  }
}

console.log(money);

// 풀이
// const money = [209000, 109000, 119000, 109000, 94000];
// console.log('상품가격 -->' + money);
// for (let i = 0; i < money.length - 1; i++) {
//   for (let j = i + 1; j < money.length; j++) {
//     if (money[i] > money[j]) {
//       const tmp = money[i];
//       money[i] = money[j];
//       money[j] = tmp;
//     }
//   }
// }
// console.log('낮은가격순' +money);
