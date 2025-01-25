// 날짜 계산 응용
const today = new Date();
// today.setMonth(today.getMonth() + 1); // 다음달

// 이번달의 1일
today.setDate(1);

// 이번달 1일의 요일 인덱스
const startDay = today.getDay();
console.log(startDay); // 0 - 24.12월은 일요일(0)시작

// 이번달의 마지막 날은 몇일인지?
const m = today.getMonth();
today.setMonth(m + 1); // 이번달의 다음달로 설정
today.setDate(0); // 다음달의 0번째 날짜 -> 전날의 마지막날
const lastDate = today.getDate();
console.log(lastDate);

let data = new Array(6);
for (let i = 0; i < data.length; i++) {
  data[i] = new Array(7);
}

let counter = 1;
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    if ((i == 0 && j < startDay) || counter > lastDate) {
      data[i][j] = 0;
    } else {
      data[i][j] = counter++;
    }
  }
}

console.log(data);

for (let i = 0; i < data.length; i++) {
  let str = "";
  for (let j = 0; j < data[i].length; j++) {
    if (data[i][j] == 0) {
      str += " \t";
    } else {
      str += data[i][j] + " \t";
    }
  }
  console.log(str);
}
