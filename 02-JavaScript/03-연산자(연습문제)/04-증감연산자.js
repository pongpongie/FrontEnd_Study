let selfPlus = 1;
console.log(selfPlus);

selfPlus++;
console.log(selfPlus);

++selfPlus;
console.log(selfPlus);

// 전위 증감 연산자
let selfPlus2 = 10;
let prevResult = 100 + ++selfPlus2;

console.log(prevResult);
console.log(selfPlus2);

// 후위 증감 연산자
let selfPlus3 = 10;
let nextResult = 100 + selfPlus3++;

console.log(nextResult);
console.log(selfPlus3);
