function getTimes(x, y) {
  const z = x * y;
  return z;
}

const a = getTimes(123, 45);
console.log(a);

const b = getTimes(123, 45) * 123;
console.log(b);

console.log(getTimes(123, 45));
