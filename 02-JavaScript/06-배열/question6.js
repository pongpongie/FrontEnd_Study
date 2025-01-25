const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];
let count = 0;

for (let i = 0; i < price.length; i++) {
  if (price[i] * qty[i] >= 80000) {
    count += 1;
  }
}

console.log(count);
