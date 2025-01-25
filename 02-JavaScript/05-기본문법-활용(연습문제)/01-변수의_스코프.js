if (false) {
  var num1 = 100;
  console.log("블록 안: ", num1);
}

// error가 아닌 undefined로 나오는 이유?
console.log("블록 밖: ", num1);

if (true) {
  var num2 = 100;
  console.log("블록 안: ", num2);
}

// var은 블록 밖에서도 참조 가능하다.
console.log("블록 밖: ", num2);

// let, const는 할당 후 선언 불가
x = 100;
let x;
console.log(x);

// var는 할당 후 선언 가능
y = 100;
var y;
console.log(y);
