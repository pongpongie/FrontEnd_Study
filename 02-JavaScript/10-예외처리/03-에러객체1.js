// 개발자가 직접 정의하는 에러

let err = new Error("Somthing happened...");

console.log("에러이름 %s", err.name);
console.log("에러내용 %s", err.message);
console.log("에러위치 %s", err.stack);
console.log("에러원인 %s", err.cause);

throw err;

// throw로 에러를 바로 던져서 무슨 수를 써도 console.log는 실행 안됨
console.log("프로그램 종료");
