//  Math.max, min - 파라미터 수 제한 없음. -- 어떻게 찾는 걸까
let max = Math.max(100, 99, 101);
console.log(max);

let min = Math.min(100, 99, 193);
console.log(min);

// 소수점 반올림
let num1 = 3.7456;
console.log(Math.round(num1));

// 올림 내림
console.log(Math.ceil(num1));
console.log(Math.floor(num1));

// 절대값
console.log("절대값", Math.abs(num1));

// 0~1 범위의 난수
console.log(Math.random());

//  두 수 사이의 난수를 리턴하는 함수
const random = (n1, n2) => {
  return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
};

let rnd = random(0, 100);
let code = "";
for (let i = 0; i < 5; i++) {
  code += random(0, 10);
}

console.log("인증번호:" + code);
