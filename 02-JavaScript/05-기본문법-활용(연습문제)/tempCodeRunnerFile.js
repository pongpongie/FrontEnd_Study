let number = Math.random() > 0.5 ? 1 : 2;

for (let i = 4-number; i < 10; i += 2) {
  console.group(`${i}단`);
  for (let j = 1; j < 10; j ++) {
    console.log(`${i} x ${j} = ${i * j}`)
  };
  console.groupEnd();
};