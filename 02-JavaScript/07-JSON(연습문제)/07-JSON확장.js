const foo = {
  name: "javascript",
  age: 19,
};

// 정의되지 않은 값에 대한 접근은 undefined로 나온다
console.log(foo.email);

// 존재하지 않는 값에 대한 연산은 숫자가 아닌 결과값으로 나오므로 Not A Number 출력
// NaN이 출력되는 기준?
const nextAge = foo.aga + 1;
console.log(nextAge);

// 정의되지 않은 key에 대한 대입 - 정의하여 대입한다.
foo.email = "hello@world.com";
console.log(foo);

// 빈 객체의 확장
const myJson = {};
console.log(myJson);

// 반복문으로 key를 동적으로 생성 및 할당
for (let i = 0; i < 10; i++) {
  const str = "value" + i;
  myJson[str] = i * 100;
}

console.log(myJson);
