// 글자 사이에 콤마 넣어서 1부터 9까지 출력, 마지막엔 콤마 생략하기
let str = "";

for (let i = 1; i <= 9; i++) {
  str += i;
  if (i !== 9) {
    str += ",";
  }
}

console.log(str);
