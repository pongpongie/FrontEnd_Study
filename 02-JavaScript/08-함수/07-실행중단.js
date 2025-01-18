function rerturnBreak(x, y) {
  if (x < 10) {
    return -1;
  }

  if (y < 10) {
    return -2;
  }

  return x + y;
}

console.log(rerturnBreak(1, 100));

console.log(rerturnBreak(100, 1));

console.log(rerturnBreak(100, 20));
