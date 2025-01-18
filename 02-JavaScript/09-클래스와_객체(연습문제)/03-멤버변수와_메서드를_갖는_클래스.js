class HelloWorld {
  message = null;

  sayHello() {
    console.log(this.message);
  }

  setEng() {
    this.message = "hello JS";
  }

  setKr() {
    this.message = "안녕 자스";
  }
}

const h1 = new HelloWorld();
const h2 = new HelloWorld();

h1.setEng();

console.log(h1.message);
console.log(h2.message);

h1.setKr();

console.log(h1.message);
console.log(h2.message);
