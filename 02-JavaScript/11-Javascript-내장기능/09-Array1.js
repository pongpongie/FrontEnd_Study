const data1 = [10, 20, 30, 40, 50];

data1.push(60, 70);
console.log(data1);

const k = data1.pop();
console.log(data1);
console.log(k);

// 맨 앞 요소 제거, 해당 요소 리턴
const x = data1.shift();
console.log(data1);

// 맨 앞 요소 추가, 원소 수 리턴
data1.unshift(0, 10);
console.log(data1);

const z = data1.splice(2, 3);
console.log(z);
console.log(data1);

// 0번째 위치부터 2개를 제거하고, 그 위치에 다른 요소들 배치
// 제거한 수보다 추가되는 원소 수가 많을 경우 기존 원소들은 뒤로 밀리면서 배열이 확장됨
// 제거한 수보다 추가되는 원소 수가 적은 경우 배열이 축소됨
data1.splice(0, 2, "a", "b", "c");
console.log(data1);

// 배열 결합
const a = [1, 2];
const b = [3, 4, 5];
const c = [].concat(a, b);

console.log(c);

// indexOf 원하는 원소 있는지 확인하기
let arr1 = [1, 0, false];

console.log(arr1.indexOf(0));
console.log(arr1.indexOf(false));
console.log(arr1.indexOf(null)); // 발견하지 못했으면 -1 반환

// includes(item, from) - 인덱스 from부터 시작해 item이 있는지 검색, 발견하면 true 반환
console.log(arr1.includes(1));

// indexOf 메서드는 요소를 찾을 때 "==="을 사용하므로 false를 검색하면 정확히 false만 검색함
// NaN처리 불가
// includes는 NaN 처리 가능
