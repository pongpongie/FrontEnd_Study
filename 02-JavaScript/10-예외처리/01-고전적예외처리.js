function foo(x, y) {
  if (x <= 0 && y <= 0) {
    return 0;
  }
  return x + y;
}

// 정상 호출 상황
console.log(foo(10, 102));

// 비정상 호출 상황
console.log(foo(-1, -2));

// 비정상 상황에 대한 고전적 처리 방법
const k = foo(-1, -2);

// 에러 상황에 대한 대응(메시지 처리)을 함수를 호출하는 곳에서 해야한다.
if (k == 0) {
  console.log("x와 y가 0보다 작습니다");
} else {
  console.log(k);
}
