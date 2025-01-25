// 원시타입?
// 일반 변수끼리의 복사는 깊은복사(값 복사)이다.
let a = 100;
let b = a;

console.log("a=", a, "b=", b);

a++;
console.log("a=", a, "b=", b); // b는 변하지 않음

// 얕은복사
// 배열, JSON, 객체 끼리의 복사

const user = {
  name: "Lee",
};

const member = user;
console.log(user);
console.log(member);

// 복사본인 member도 변한다.
member.name = "Kim";
console.log(user);
console.log(member);

const d1 = [1, 2, 3];
const d2 = d1;
console.log(d1);
console.log(d2);

// 복사본인 d2도 변한다.
d1[0] += 10;
d1[1] += 10;
d1[2] += 10;
console.log(d1);
console.log(d2);

// 깊은 복사 방법
// 1) 원본과 동일한 깊이를 갖는 배열 생성 후 반복분으로 복사
const a1 = [1, 2, 3];
const a2 = new Array(a1.length);

for (let i = 0; i < a1.length; i++) {
  a2[i] = a1[i];
}

console.log(a1);
console.log(a2);

a1[0] += 10;
a1[1] += 10;
a1[2] += 10;

console.log(a1);
console.log(a2); // a2는 깊은복사로 변하지 않음

// 2) .slice() 활용
const a3 = a1.slice();

console.log(a1);
console.log(a3);

a1[0] += 10;
a1[1] += 10;
a1[2] += 10;

console.log(a1);
console.log(a3); // a3는 변하지 않음

// JSON을 깊은복사하기
const addr = {
  city: "서울",
  gu: "구로",
};

const copy = {};

for (let key in addr) {
  copy[key] = addr[key];
}

console.log(addr, copy);

addr.city = "인천";
addr.gu = "부평";

console.log(addr, copy); // copy는 깊은복사되어 변하지 않음

// JS의 Object에 대한 메서드 활용
const copy2 = {};

Object.assign(copy2, addr);
console.log(copy2);
