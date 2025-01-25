console.log(parseInt("015"));
console.log(parseInt(3.14));
console.log(parseInt("3.14"));
console.log(parseInt("15,123"));
console.log(parseInt("15*3")); // * 이후는 버림
console.log(parseInt("15e2")); // 동일하게 문자 만나면 이후는 버림
console.log(parseInt("15px"));

console.log(parseFloat(3.14));
console.log(parseFloat("3.14"));
console.log(parseFloat(3.0)); // JS는 3.0과 3 모두 동일하게 처리된다. 따라서 3으로 나옴
console.log(parseFloat(3));

console.log(Number("015"));
console.log(Number("3.14"));

console.log(parseFloat(true)); //NaN
console.log(parseFloat(false));
