const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];

/* 
// using max

let max = price[0] * qty[0];

for (let i = 1; i < price.length; i++) {
  if (max < price[i] * qty[i]) {
    max = price[i] * qty[i];
  }
}

console.log(max);
*/

/*
// using selection sort

const money = [];
for (let i = 0; i < price.length; i++) {
  money.push(price[i] * qty[i]);
}

console.log(money);

for (let i = 0; i < price.length; i++) {
  for (let j = i + 1; j < price.length; j++) {
    if (money[i] > money[j]) {
      const tmp = money[j];
      money[j] = money[i];
      money[i] = tmp;
    }
  }
}

console.log(money);
*/

// using bubble sort

const money = [];
for (let i = 0; i < price.length; i++) {
  money.push(price[i] * qty[i]);
}

console.log(money);
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
/* 


*/
