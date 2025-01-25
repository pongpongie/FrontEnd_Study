const blood_data = ["A", "A", "A", "O", "B", "B", "O", "AB", "AB", "O"];

const result = { A: 0, B: 0, O: 0, AB: 0 };
for (const key of blood_data) {
  result[key]++;
}
console.log(result);
