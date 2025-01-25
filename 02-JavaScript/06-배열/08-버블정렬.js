const array = [3, 5, 1, 4, 2];
console.log(`before selection sort: ${array}`);

for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - i - 1; j++) {
    if (array[j] > array[j + 1]) {
      const tmp = array[j + 1];
      array[j + 1] = array[j];
      array[j] = tmp;
    }
  }
}

console.log(`after selection sort: ${array}`);
