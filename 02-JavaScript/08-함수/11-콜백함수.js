function foo(x, y, cb) {
  const result = cb(x, y);
  console.log(result);
}

// 콜백 1) 함수 직접 정의
// const plus = (x, y) => {
//   return x + y;
// };

// foo(1, 2, plus);

// 콜백 2) 콜백을 익명함수로 전달
foo(1, 2, function (a, b) {
  return a * b;
});

// 콜백 3) 콜백을 화살표함수로 전달

foo(1, 2, (a, b) => a + b);

// 콜백 4) 중괄호 생략 가능

foo(1, 2, (a, b) => console.log(a + b));
