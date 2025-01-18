const student1 = {
  studno: 1010,
  grade: 1,
  name: "학생1",
};

const student2 = {
  studno: 2020,
  grade: 2,
  name: "학생2",
};

// 목록 구조를 갖는 JSON 객체
const classRoom = {
  student: [student1, student2],
};

// 배열 특성을 활용한 반복문 접근
for (let i = 0; i < classRoom.student.length; i++) {
  console.group(i, "번째 학생");
  console.log(" >> 학번", classRoom.student[i].studno);
  console.log(" >> 학년", classRoom.student[i].grade);
  console.log(" >> 이름", classRoom.student[i].name);
  console.groupEnd();
}

// for..of문 사용 - key를 통한 접근
for (const s of classRoom.student) {
  console.log(" >> 학번", s.studno);
  console.log(" >> 학년", s.grade);
  console.log(" >> 이름", s.name);
}

// for..in 문 -> key값 반환
for (const s in classRoom) {
  console.log(s);
  // console.log(" >> 학번", s);
  // console.log(" >> 학년", s.grade);
  // console.log(" >> 이름", s.name);
}

// for in 문에 대해 더 알아보자
