const days = ["일", "월", "화", "수", "목", "금", "토"];

const date1 = new Date();
console.log(date1.toLocaleString());

const yy = date1.getFullYear();
const mm = date1.getMonth() + 1; // 0이 1월, 11이 12월임
const dd = date1.getDate();

// 0=일요일 ~ 6=토요일
const i = date1.getDay();
const day = days[i];

let result = yy + "-" + mm + "-" + dd + " " + day + "요일";
console.log(result);

// 특정 날짜를 의미하는 객체 생성, 시간 설정을 안하면 자정으로 설정됨
// 역시 9 = 10월을 의미
let date2 = new Date(2021, 9, 5);
console.log(date2.toLocaleString());

// 이미 생성된 날짜의 객체 성분 변경
date2.setFullYear(2020);
date2.setHours(11);

console.log(date2.toLocaleString());
