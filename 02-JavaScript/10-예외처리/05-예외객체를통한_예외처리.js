function foo(id, pw) {
  if (!id) {
    // 함수 안에서 에러를 강제로 발생시킬 경우, 이 함수를 호출하는 위치를 에러로 인식한다.
    // - 어떻게 검증하지?, return Error랑은 뭐가 다르지?
    // return을 하면 catch가 안되네 왜지?
    console.log("아이디 검사 시작");
    return new Error("아이디를 입력하세요");
  }

  if (!pw) {
    console.log("패스워드 검사 시작");
    return new Error("패스워드를 입력하세요");
  }

  return "로그인 되셨습니다.";
}

// try 블록 안의 코드는 최소화 하는 것이 효율에 좋다.
// k를 정상적으로 리턴 받았다면 결과값을 '활용하는' 처리는 try 블록 밖에서 하는 것이 좋다.
// 에러 점검이 끝난 후 try~catch 블록 밖에서 k를 활용하려면
// 변수의 선언 위치가 try 블록 보다 상위에 위치해야 한다 --- 변수의 스코프 규칙 때문

let a = null;
let b = null;

try {
  a = foo("", "1234");
} catch (err) {
  console.log("에러이름 %s", err.name);
  console.log("에러내용 %s", err.message);
  console.log("에러위치 %s", err.stack);
  console.log("에러원인 %s", err.cause);
}
