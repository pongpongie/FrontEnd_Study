function foo(x, y) {
  console.log("x=", x, "y=", y);

  // 파라미터 생략에 대한 처리가 필요함
  let result = 0;
  if (x != undefined) {
    result += x;
  }
  if (y != undefined) {
    result += y;
  }

  console.log("result =", result);
}

foo(100, 500);
foo(); // x= undefined, y= undefined
