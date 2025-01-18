const student = {
  studno: 10101,
  grade: 1,
  name: "학생1",
  phoneno: "010-1234-5678",
};

console.group("출력 타입 1");
console.log("학번: ", student.studno);
console.log("학년: ", student.grade);
console.log("이름: ", student.name);
console.log("연락처: ", student.phoneno);
console.groupEnd();

// 하위 변수의 이름을 동적으로 설정해야 할 경우 사용됨
console.group("출력 타입 2");
console.log("학번: ", student["studno"]);
console.log("학년: ", student["grade"]);
console.log("이름: ", student["name"]);
console.log("연락처: ", student["phoneno"]);
console.groupEnd();

const keyname = "name";
console.log(student["name"]);

// json key를 배열로 반환하기
const keys = Object.getOwnPropertyNames(student);
console.log(keys);

// for..of 문 - key로 value 조회
for (const k of keys) {
  console.log(student[k]);
}

// for..in 문 - key를 바로 탐색할 수 있음
for (const k in student) {
  console.log(k);
}
