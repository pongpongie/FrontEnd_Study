const CHEOLSU = [1, 5, 7, "J", "Q", "A"];
const YOUNGHEE = [2, 3, 4, 5, "Q", "K", "A"];
let str = "";

let cnt = 0;
for (let i = 0; i < YOUNGHEE.length; i++) {
  for (let j = 0; j < CHEOLSU.length; j++) {
    if (YOUNGHEE[i] === CHEOLSU[j]) {
      cnt++;
      str += `${j}번째 >> ${CHEOLSU[j]}\n`;
    }
  }
}
console.log("가져올 수 있는 카드의 수: ", cnt);
console.log(str);
