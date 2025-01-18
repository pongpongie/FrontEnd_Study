function sayHello(msg) {
  console.log("sayHello(" + msg + ")");
}

sayHello("안녕");

const say = sayHello;

say("바보야");
