const calc = {
  a: 100,
  b: 200,
  foo: function (x, y) {
    return x + y;
  },
  bar: function (x, y) {
    return x - y;
  },
};

console.log(calc.foo(10, 20));
