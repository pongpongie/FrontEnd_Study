const data = [1, 5, 2, 4, 3];

const cnt = data.length % 2 == 0 ? data.length / 2 : (data.length - 1) / 2;

for (let i = 0; i < cnt; i++) {
  const tmp = data[i];
  data[i] = data[data.length - 1 - i];
  data[data.length - 1 - i] = tmp;
}

console.log(data);
