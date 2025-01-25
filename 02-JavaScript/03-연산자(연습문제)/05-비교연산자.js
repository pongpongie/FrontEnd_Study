let a1 = "1";
let a2 = 1;
let a3 = 1.0;
let a4 = true;

console.group("2) 같다");
console.group("내용만 비교한다"); // 내용만 비교한다는게 무슨의미지
console.log(a1 == a2);
console.log(a1 == a3);
console.log(a1 == a4);

console.log(a2 == a3);
console.log(a2 == a4);

console.log(a3 == a4);
console.groupEnd();

console.group("데이터 타입까지 비교");
console.log(a1 === a2);
console.log(a1 === a3);
console.log(a1 === a4);

console.log(a2 === a3);
console.log(a2 === a4);

console.log(a3 === a4);
console.groupEnd();
