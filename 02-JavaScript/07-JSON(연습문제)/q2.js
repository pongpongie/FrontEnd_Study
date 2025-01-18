// 2-1
const exam = {
  철수: [89, 82, 79, 91],
  민영: [91, 95, 94, 89],
  남철: [65, 57, 71, 64],
  혜진: [82, 57, 81, 83],
};

for (const key in exam) {
  let sum = 0;
  for (let i = 0; i < exam[key].length; i++) {
    sum += exam[key][i];
  }
  console.log(`${key}의 총점: ${sum}, 평균: ${sum / exam[key].length}`);
}

// 풀이
for (const key in exam) {
  let sum = 0;
  for (const p of exam[key]) {
    sum += p;
  }
  let avg = sum / exam[key].length;
  console.log(key, sum, avg);
}

// 2-2 국, 영, 수, 과 일 경우 수학에 대한 모든 학생의 총점과 평균

let wholeSum = 0;
for (const key in exam) {
  for (let i = 0; i < exam[key].length; i++) {
    if (i === 2) {
      wholeSum += exam[key][i];
    }
  }
}

console.log(
  `모든 학생의 수학 총점은 ${wholeSum}점이고, 평균은 ${wholeSum / 4}점 입니다.`
);

// 풀이
let math_sum = 0;

let student_count = 0;
for (const key in exam) {
  math_sum += exam[key][2];

  student_count++;
}

let math_avg = math_sum / student_count;
console.log(
  `모든 학생의 수학 총점은 ${math_sum}점이고, 평균은 ${math_avg}점 입니다.`
);

// for of문과 for in문의 차이에 대해 알아보자
