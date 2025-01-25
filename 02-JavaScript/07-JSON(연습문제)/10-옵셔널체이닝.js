const user = {};

// 최초로 없는 key에 참조할경우 undefined
console.log(user.address);

// 없는 키의 프로퍼티를 찾을 경우 error
// console.log(user.address.city);

// ES5 는 && 연산자를 활용해서 객체 검사
console.log(user && user.address && user.address.city);

// 객체? 는 객체가 undefined이면 평가를 도중에 중지하고 undefined를 반환
// 반드시 존재해야하는 개체에는 if문으로 존재 여부를 검사하는 것이 좋음

console.log(user?.address?.city);
