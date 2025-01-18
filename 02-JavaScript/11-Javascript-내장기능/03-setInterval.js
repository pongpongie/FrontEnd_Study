// setInterval은 타이머를 종료시킬 수 있는 Object를 반환함

let count1 = 0;

console.log("타이머 1 시작");

const timerId1 = setInterval(() => {
  count1++;
  console.log("[타이머] " + count1 + "번 째 자동 실행");
  if (count1 == 5) {
    console.log("실행 종료");
    clearInterval(timerId1);
  }
}, 3000);

let count2 = 0;

setTimeout(() => {
  console.log("타이머 2 시작");
  const timerId2 = setInterval(() => {
    count2++;
    console.log("[타이머] " + count2 + "번째 자동 실행");
    if (count2 == 10) {
      clearInterval(timerId2);
    }
  }, 1000);
  setTimeout(() => {
    console.log("타이머 2 종료");
  }, 11000);
}, 16000);
