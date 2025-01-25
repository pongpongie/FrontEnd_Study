function foo() {
  for (let i = 1; i < 10; i++) {
    console.log("2 X " + i + "=" + i * 2);
  }
}

setTimeout(foo, 3000);
console.log("구구단을 외자");

// 일반적으로 콜백을 별도로 정의하지 않고 그대로 전달함

setTimeout(() => {
  for (let i = 1; i < 10; i++) {
    console.log("3 X " + i + "=" + i * 3);
  }
}, 1500);

console.log("프로그램 종료");
