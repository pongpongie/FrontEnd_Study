const data = [1, 2, 3];

console.log("배열 탐색 시작");

// 먼저 try {...} 안의 코드가 실행된다.
// 에러가 없다면, try 안의 마지막 줄까지 실행되고, catch 블록은 건너뛴다.
// 에러가 있다면 try 안 코드의 실해이 중단되고, catch(err) 블록으로 제어 흐름이 넘어간다.
// 변수(err)는 무슨 일이 일어났는지에 대한 설명이 담긴 에러 객체를 포함한다.

try {
  for (let i = 0; i < 10; i++) {
    console.log(data[i].toFixed(2));
  }

  console.log("try 블록 실행 완료, 에러 없음");
} catch (err) {
  console.group("%s 에러 발생", err.name);
  console.log(err.message);
  console.log(err.stack);
  console.log(err);
  console.groupEnd();
} finally {
  // 에러 발생 여부 상관 없이 무조건 맨 마지막에 실행됨
  // 생략 가능
  console.log("배열 탐색이 종료되었습니다");
}
