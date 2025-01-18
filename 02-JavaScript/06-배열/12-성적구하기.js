/* 
학생별 총점과 평균 구하기
| 이름 | 국어 | 영어 | 수학 |
|-----|-----|-----|-----|
| 철수 | 92 | 81 | 76 |
| 영희 | 72 | 95 | 84 |
| 민혁 | 80 | 86 | 98 |
 */

const grade = [
  ["철수", 92, 81, 76],
  ["영희", 72, 95, 84],
  ["민혁", 80, 86, 98],
];

let allsum = 0;

for (let i = 0; i < grade.length; i++) {
  let sum = 0;
  for (let j = 1; j < grade[i].length; j++) {
    sum += grade[i][j];
    allsum += grade[i][j];
  }
  console.log(
    `${grade[i][0]}의 총점은 ${sum}이고, 평균은 ${
      sum / (grade[i].length - 1)
    }입니다.`
  );
}

console.log(allsum);
