for (let i = 1; i < 10; i++) {
  console.group("%d단을 외자", i);
  for (let j = 1; j < 10; j++) {
    console.log("%d x %d = %d", i, j, i * j);
  }
  console.groupEnd();
}
