let err = new Error();

try {
  // throw 구문은 그 자체를 에러로 인식하기 때문에 try~catch 처리가 가능하다? -- 무슨말이지 아 throw가 그냥 에러 던지는 키워드라는 말
  throw err;
} catch (err) {
  console.log("에러 이름 %s", err.name);
  console.log("에러 내용 %s", err.message);
}

// 이렇게 하면 try catch로 감싸면 throw를 해도 프로그램 뻑나지 않고 에러 처리를 하게 되어 console.log까지 실행 흐름이 이어짐
console.log("프로그램 종료");
