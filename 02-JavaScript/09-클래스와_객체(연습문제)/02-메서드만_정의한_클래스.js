class Calc {
  plus = (x, y) => {
    return x + y;
  };

  minus = (x, y) => {
    return x - y;
  };
}

const c = new Calc();

console.log(c.plus(5, 4));
console.log(c.minus(4, 3));
