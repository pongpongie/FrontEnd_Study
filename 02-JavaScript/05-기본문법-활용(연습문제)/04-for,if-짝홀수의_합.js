let a = 0;
let b = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log("%d는 짝수", i);
    a += i;
  } else {
    console.log("%d는 홀수", i);
    b += i;
  }
}

console.log("1 ~ 10 까지 짝수 합 = %d", a);
console.log("1 ~ 10 까지 홀수 합 = %d", b);
