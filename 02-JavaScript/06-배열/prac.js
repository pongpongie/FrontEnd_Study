// 문제 1.
const checkList = [true, false, false, true, false];

console.log("before --->", checkList);

for (let i = 0; i < checkList.length; i++) {
  checkList[i] = !checkList[i];
}

console.log("after --->", checkList);

// 문제 2.
const grade = [75, 82, 91];
let sum = 0;
let avg = 0;

for (const elem of grade) {
  sum += elem;
}

console.log("총점: ", sum);
console.log("평균: ", sum / grade.length);

// 문제 3 - 다시 풀기
const time = [7, 5, 5, 5, 5, 10, 7];

let timeSum = 0;

for (let i = 0; i < time.length; i++) {
  let x = i < 4 ? 4500 : 5200;
  timeSum += time[i] * x;
}

console.log("총 급여: ", timeSum, "원");

// 문제 4
// const price = [38000, 20000, 17900, 17900];
// const qty = [6, 4, 3, 5];
// let money = 0;

// for (let i = 0; i < price.length; i++) {
//   money += price[i] * qty[i];
// }

console.log("총 결제금액: ", money);

// 문제 5
const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];
let money = [];

for (let i = 0; i < price.length; i++) {
  money[i] = price[i] * qty[i];
}
console.log(money);

const money1 = money;
const money2 = money;

// bubble sort
for (let i = 0; i < money1.length; i++) {
  for (let j = 0; j < money1.length - 1; j++) {
    if (money1[j] > money1[j + 1]) {
      let tmp = money1[j + 1];
      money1[j + 1] = money1[j];
      money1[j] = tmp;
    }
  }
}
console.log(money1);

// selection sort
for (let i = 0; i < money2.length; i++) {
  for (let j = i + 1; j < money2.length; j++) {
    if (money2[i] > money2[j]) {
      let tmp = money2[j];
      money2[j] = money2[i];
      money2[i] = tmp;
    }
  }
}

console.log(money2);

// 5번 샘 답
for (let i = 1; i < price.length; i++) {
  const sum = price[i] * qty[i];
  if (money < sum) {
    money = sum;
  }
}

console.log("가장 높은 상품금액: " + money + "원");

// 6번 샘 답

let count = 0;
for (let i = 0; i < price.length; i++) {
  const sum = price[i] * qty[i];
  if (sum >= 80000) {
    count++;
  }
}
console.log("무료배송 항목: " + count + "건");
