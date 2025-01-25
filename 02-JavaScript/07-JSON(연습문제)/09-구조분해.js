const object = { a: 1, b: 2, c: 3 };

// {} 안에 명시된 항목과 도일한 key를 갖는 데이터가 존재해야 함.
const { a, b, c } = object;
console.log(typeof a, typeof b, typeof c);

// 배열에 대한 비구조 문법
// 변수 이름은 마음대로 정할 수 있음
// const [state, setState] = useContext(fooContext) -> react에서 많이 사용됨
const arr = [100, 200];

const [x, y] = arr;
console.log(typeof x, typeof y);
console.log(x, y);

// 구조분해를 활용하여 필요한 데이터만 추출하기
const data = { name: "hello", age: 20, height: 172, weight: 85 };
const { name } = data;
const { age } = data;
console.log(typeof name, name);
console.log(typeof age, age);

// 분해하면서 변수 이름을 변경후 할당
const { height: h, weight: w } = data;
console.log(h, w);

// 구조분해 안된 나머지들을 별도로 분리하기
const dummy = { a1: 200, a2: 200, a3: 300, a4: 400 };
const { a1, a2, ...rest } = dummy;
console.log(typeof a1, a1, typeof a2, a2, typeof rest, rest);

// 구조분해를 활용하여 기존 데이터에 새로운 데이터 병합한 객체 생성
const origin = { name: "Javasctipt", age: 25 };
const newdata = { ...origin, gender: "M" };

const newdata2 = { ...origin };

console.log(newdata);
console.log(newdata2);

// origin이 변하지 않음
newdata2.gender = "Fem";
console.log(origin);
console.log(newdata2);

// 구조분해를 통한 데이터 생성 시 원본과 동일한 키를 가지면 데이터를 수정한다.
const newdata3 = { ...origin, age: 30 };
console.log(newdata3);
