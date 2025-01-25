const names = ["재석", "민영", "종민", "광수", "승기", "세정"];
const grades = [82, 91, 54, 62, 88, 90];

// bubble sort
// for (let i = 0; i < names.length; i++) {
//   for (let j = 0; j < names.length - i - 1; j++) {
//     if (grades[j] < grades[j + 1]) {
//       const tmp1 = grades[j + 1];
//       const tmp2 = names[j + 1];
//       grades[j + 1] = grades[j];
//       names[j + 1] = names[j];
//       grades[j] = tmp1;
//       names[j] = tmp2;
//     }
//   }
// }

// console.log(grades, names);

// selection sort

for (let i = 0; i < names.length; i++) {
  let maxIdx = i; // 루프 초기화 - 정렬된 맨 앞 원소 이외의 값들 중에서 다시 가장 큰 원소를 첫 번째로 설정
  for (let j = i + 1; j < names.length; j++) {
    if (grades[maxIdx] < grades[j]) {
      maxIdx = j;
    }
  }
  const tmp1 = grades[i];
  const tmp2 = names[i];
  grades[i] = grades[maxIdx];
  names[i] = names[maxIdx];
  grades[maxIdx] = tmp1;
  names[maxIdx] = tmp2;
}

console.log(grades, names);

/* 
3. 왜 작성한 코드가 선택 정렬이 아닌가?
작성한 코드와 선택 정렬을 비교한 결과:

작성한 코드는 grades[i]와 grades[j]를 비교한 뒤 조건이 맞으면 즉시 교환한다.
한 번의 비교 루프에서 교환이 여러 번 일어날 수 있다.
선택 정렬은 루프를 돌며 특정 조건(최댓값/최솟값)을 만족하는 인덱스를 찾아, 한 번의 교환으로 정렬한다.
즉, 작성한 코드는 반복문 안에서 교환이 빈번히 일어나므로 선택 정렬의 특징을 충족하지 않는다.
*/
