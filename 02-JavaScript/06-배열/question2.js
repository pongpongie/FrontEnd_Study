const grade = [75, 82, 91];
let sum = 0;
let avg = 0;

for (let elem of grade) {
  sum += elem;
}

avg = parseInt(sum / grade.length);

console.log(`총합: ${sum} , 평균: ${avg}`);
