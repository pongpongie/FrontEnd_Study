// fn + f9 -> 브레이크포인트 단축어
// fn + f5 -> 디버깅모드 단축어
// fn + f10 -> 다음 중단점

const point = 78;

if (point >= 70) {
  console.log("pass 입니다.");

  if (point > 90) {
    console.log("A");
  } else if (point > 80) {
    console.log("B");
  } else {
    console.log("C");
  }
} else {
  console.log("Nonpass 입니다.");
}
