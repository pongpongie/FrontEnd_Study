const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];
const money = [];

// 배열 생성
for (let i = 0; i < price.length; i++) {
  money.push(price[i] * qty[i]);
}

console.log("Before Sorting:", money);

// 선택 정렬
for (let i = 0; i < money.length - 1; i++) {
  let minIndex = i; // 현재 최소값의 인덱스 저장
  for (let j = i + 1; j < money.length; j++) {
    if (money[j] < money[minIndex]) {
      minIndex = j; // 더 작은 값이 발견되면 인덱스 업데이트
    }
  }
  // 현재 위치(`i`)와 최소값 위치(`minIndex`)를 교환
  if (minIndex !== i) {
    const tmp = money[i];
    money[i] = money[minIndex];
    money[minIndex] = tmp;
  }
}
