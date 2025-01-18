const student = ["둘리", "도우너", "또치", "희동"];

const grade = [
  [78, 89, 96],
  [62, 77, 67],
  [53, 90, 80],
  [100, 99, 98],
];

for (let i = 0; i < grade.length; i++) {
  let sum = 0;
  let mean = 0;
  for (let j = 0; j < grade[i].length; j++) {
    sum += grade[i][j];
  }
  mean = sum / grade[i].length;
  console.log(`${student[i]} 총점: ${sum}, 평균: ${mean}`);
}
