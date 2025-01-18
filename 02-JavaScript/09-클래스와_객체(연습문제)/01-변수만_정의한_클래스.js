class MemberClass {
  userName = null;
  email = null;
}

const m1 = new MemberClass();
console.log(m1);
console.log(m1.userName);
console.log(m1.email);

console.log(typeof m1);
console.log(typeof m1.userName);
console.log(typeof m1.email);

const m2 = new MemberClass();
console.log(m2);
console.log(m2.userName);
console.log(m2.email);

m1.userName = "민혁";
m1.email = "mh@gmail.com";

m2.userName = "철수";
m2.email = "cs@gmail.com";

console.log(m1);
console.log(m1.userName);
console.log(m1.email);

console.log(typeof m1);
console.log(typeof m1.userName);
console.log(typeof m1.email);

console.log(m2);
console.log(m2.userName);
console.log(m2.email);

console.log(typeof m2);
console.log(typeof m2.userName);
console.log(typeof m2.email);
