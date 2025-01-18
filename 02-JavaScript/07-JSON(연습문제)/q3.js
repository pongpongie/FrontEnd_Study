const covid19 = [
  { date: "0125", active: 426 },
  { date: "0126", active: 343 },
  { date: "0127", active: 547 },
  { date: "0128", active: 490 },
  { date: "0129", active: 460 },
  { date: "0130", active: 443 },
  { date: "0131", active: 338 },
  { date: "0201", active: 299 },
];

// 3-1) 누적 확진자 수와 평균 확진자 수를 구하시오

// 풀이
let sum = 0;

for (const c of covid19) {
  sum += c.active;
}

console.log("누적 확진자 수 : %d", sum);
console.log("평균 확진자 수 : %d", sum / covid19.length);

// 3-2) 확진자가 제일 나타난 날짜는 언제인가?
// let max_active = covid19[0].active;
// let max_date = covid19[0].date;

// for (const c in covid19) {
//   if (max_active < covid19[c].active) {
//     max_active = covid19[c].active;
//     max_date = covid19[c].date;
//   }
// }

// console.log(max_active, max_date);
// 풀이
let max_active = covid19[0].active;
let max_date = covid19[0].date;

for (let i = 0; i < covid19.length; i++) {
  if (max_active < covid19[i].active) {
    max_active = covid19[i].active;
    max_date = covid19[i].date;
  }
}

console.log(max_active, max_date);
