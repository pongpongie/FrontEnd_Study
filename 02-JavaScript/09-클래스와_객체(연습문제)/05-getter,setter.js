class UserClass {
  // 은닉된 멤버변수
  #userName;
  #email;

  constructor(userName, email) {
    this.#userName = userName;
    this.#email = email;
  }

  set userName(value) {
    if (!value) {
      console.log("userName을 입력하세요");
      return;
    }

    this.#userName = value;
  }

  get userName() {
    return this.#userName;
  }

  set email(value) {
    if (!value) {
      console.log("email을 입력하세요");
    }

    this.#email = value;
  }

  get email() {
    return this.#email;
  }

  login() {
    if (!this.userName || !this.email) {
      console.log("userName이나 email을 확인하세요");
      return;
    }

    console.log(
      `로그인 되었습니다. -> userName : ${this.#userName}, email : ${
        this.#email
      }`
    );
  }
}

const user = new UserClass("시현", "hyunnycap@naver.com");
user.login();

// 은닉된 멤버변수에 접근하는 코드이므로 에러
// #userName 속성은 프라이빗 식별자를 포함하기 대문에 UserClass 클래스 외부에서 액세스 할 수 없습니다.
// console.log(user.#userName);

// 은닉화 되어있기 때문에 멤버변수(필드)들이 나타나지 않는다.
console.log(user);

// get과 set은 "()" 없이도 함수처럼 호출되어 메서드인지 프로퍼티인지 확인하기 어렵다
user.userName = "";
user.email = "";

console.log(user.userName);

user.userName = "HelloWorld";
user.email = "hello@world.com";

console.log(user.userName);
