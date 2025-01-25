// 기본값을 설정하여 undefined나 예외값에 대한 처리를 할 수 있음
function bar(x = 1, y = 2) {
  console.log("x = ", x, "y =", y);
  let result = x + y;
  console.log("result = ", result);
}

bar(100, 500);
bar(500);
bar();
