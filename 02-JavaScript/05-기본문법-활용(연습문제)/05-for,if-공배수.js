// 1부터 100까지 3과 5의 공배수를 모두 출력하고, 공배수의 합 모두 출력하기

let sum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log(i);
    sum += i;
  }
}

console.log(sum);
