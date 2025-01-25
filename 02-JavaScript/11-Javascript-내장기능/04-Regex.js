const username = "자바스크립트";
const age = "20";
const userid = "js123";

const pattern1 = /^[ㄱ-ㅎ가-힣]*$/;

if (!pattern1.test(username)) {
  console.log("한글만 입력하세요");
}

const pattern2 = /^[a-zA-Z0-9]*$/;

if (!pattern2.test(userid)) {
  console.log("아이디는 숫자 + 영어 조합으로만 입력 가능");
}
