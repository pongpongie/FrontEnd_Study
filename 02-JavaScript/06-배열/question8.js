//풀이
const arr = [5, 3, 2, 8, 9];
console.log("before --->" + arr);

//역순 배치 공식
// 1) 원소가 짝수개 일 경우: 배열길이 /2 만큼 반복
// 2) 원소가 홀수개 일 경우 (배열길이 - 2)/2 만큼 반복
// 3) i번째와 길이-i-1 번쨰를 맞굥환

const k = arr.length % 2 ? (arr.length - 1) / 2 : arr.length / 2;

for (let i = 0; i < k; i++) {
  const p = arr.length - 1 - i;
  const tmp = arr[i];
  arr[i] = arr[p];
  arr[p] = tmp;
}

console.log("after -->", arr);
