![](배열의%20활용.jpg)

# JavaScript Array(배열) 활용 예제

### 문제 1.
다음의 소스코드는 boolean 데이터를 저장하고 있는 배열에 대한 어떤 처리를 보여준다.
실행 결과에서 제시하는 것과 같이 배열에 저장되어 있는 값들을 반전(true는 false로, false는 true로) 변환하는 처리를 완성하시오.

```javascript
const check_list = [true, false, false, true, true];
console.log("before -->" + check_list);

// implement

console.log("after -->" + check_list);
```

#### 나의 풀이

```javascript
const check_list = [true, false, false, true, true];
console.log("before -->" + check_list);

for (let elem of check_list) {
  elem = !elem;
}

console.log("after -->" + check_list);
```

`check_list`는 바뀌지 않는다. 왜일까?

`for...of`가 배열의 요소 값(value)을 **복사하여 순회하기** 때문이다. 이 값은 배열의 실제 요소와 **직접 연결된 참조가 아니기 때문에**, 수정하더라도 원본 배열에 영향을 미치지 않는다.

elem의 값을 변경해도 이는 복사된 변수(elem)에만 영향을 미치며, 원본 배열의 요소에는 영향을 주지 않는다. 즉, <span style="background: #ffff00">`elem = !elem`은 단지 elem 변수를 업데이트할 뿐이다.</span>

#### 다른 풀이:
```javascript
const check_list = [true, false, false, true, true];
console.log("before -->" + check_list);

for (let i = 0; i < check_list.length; i++) {
  check_list[i] = !check_list[i];
}

console.log("after -->" + check_list);
```

이처럼 원본 배열을 수정하려면 배열의 요소를 직접 참조할 수 있는 방식(인덱스 기반 접근 등)을 사용해야 한다.

### 문제 2.

|html|css|js|
|-|-|-|
|75|82|91|

이 점수표를 grade라는 이름의 1차원 배열로 구성하고 이 배열을 활용하여 총점을 의미하는 변수 sum과 평균을 의미하는 변수 avg를 구하시오.

#### 나의 풀이

```javascript
const grade = [75, 82, 91];
let sum = 0;
let avg = 0;

for (let elem of grade) {
  sum += elem;
}

avg = parseInt(sum / grade.length);

console.log(`총합: ${sum} , 평균: ${avg}`);
```

여기서는 배열의 인덱스가 필요하지 않기 때문에 `for...of`구문을 사용할 수 있었다.

### 문제 3.

다음은 어떤 학생이 일요일부터 토요일까지 일주일간 아르바이트를 한 시간을 기록한 것이다.

|일|월|화|수|목|금|토|
|-|-|-|-|-|-|-|
|7|5|5|5|5|10|7|

이 학생의 시급은 원래 4,500원이었지만 목요일부터 5,200원으로 올랐다고 할 때 일주일간의 총 급여를 구하시오.

#### 나의 풀이

```javascript
const times = [7, 5, 5, 5, 5, 10, 7];
let sum = 0;

for (let i = 0; i < times.length; i++) {
  if (i <= 3) {
    sum += times[i] * 4500;
  } else {
    sum += times[i] * 5200;
  }
}

console.log(sum);
```
답은 맞았지만, `if` 문을 삼항연산자로 바꿀 수 있다.

#### 다른 풀이

```javascript
const times = [7, 5, 5, 5, 5, 10, 7];
let sum = 0;

for (let i = 0; i < times.length; i++) {
  i <= 3 ? sum += times[i] * 4500 : sum += times[i] * 5200
}

console.log(sum);
```

### 문제 4.
아래의 화면은 어떤 사람이 쇼핑몰의 장바구니에 담은 상품에 대한 내역이다.
상품의 가격을 원소로 갖는 1차 배열 price와 각 상품의 수량을 원소로 갖는 1차 배열 qty를 정의하고 이 사람이 총 얼마를 결제해야 하는지 총 결제금액을 구하는 프로그램을 작성하시오.

총 결제금액의 변수 이름은 money로 합니다.

#### 나의 풀이

```javascript
const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];
let money = 0;

for (let i = 0; i < price.length; i++) {
  money += price[i] * qty[i];
}

console.log(money);
```

간단하게 순회하면 된다.

### 문제 5.

위 문제 4번에서 상품금액(판매가 x 수량)이 가장 비싼 항목은 얼마인지 구하시오.

#### 나의 풀이

간단하게 `max`변수 하나로 찾는 방법이 있다.

```javascript
const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];

let max = price[0] * qty[0];

for (let i = 1; i < price.length; i++) {
  if (max < price[i] * qty[i]) {
    max = price[i] * qty[i];
  }
}

console.log(max);
```

정렬을 사용할 수도 있다.


**선택 정렬을 사용한 풀이**
```javascript
const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];

const money = [];
for (let i = 0; i < price.length; i++) {
  money.push(price[i] * qty[i]);
}

console.log(money);

for (let i = 0; i < price.length; i++) {
  for (let j = i + 1; j < price.length; j++) {
    if (money[i] > money[j]) {
      const tmp = money[j];
      money[j] = money[i];
      money[i] = tmp;
    }
  }
}

console.log(money);
```

지쌤께 여쭤보니 이건 "버블 정렬"에 가깝다고 한다. 선택 정렬을 활용한 다른 풀이를 봐보자.

**버블 정렬을 사용한 풀이**

```javascript
const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];
const money = [];

for (let i = 0; i < price.length; i++) {
  money.push(price[i] * qty[i]);
}const money = [];
for (let i = 0; i < price.length; i++) {
  money.push(price[i] * qty[i]);
}

console.log(money);
for (let i = 0; i < money.length; i++) {
  for (let j = 0; j < money.length - i; j++) {
    if (money[j] > money[j + 1]) {
      const tmp = money[j + 1];
      money[j + 1] = money[j];
      money[j] = tmp;
    }
  }
}

console.log(money);
```

버블 정렬은 맞는데, 인덱스에서 오류가 발생할 수 있다. 
**하지만 자바스크립트는 오류를 뱉지 않는다.** 왜 그럴까?

> [!IMPORTANT]
>
> **왜 오류가 발생하지 않는가?**
> 배열의 범위를 초과한 접근은 `undefined`를 반환하지만, 이는 오류가 아니라 유효한 JavaScript 동작이다.
> 조건문(if)에서 undefined를 사용해 비교하더라도 이는 단순히 false로 평가될 뿐 예외가 발생하지 않는다.
> 따라서, 범위를 초과했어도 프로그램은 정상적으로 실행된다.

#### 다른 풀이

**선택 정렬을 사용한 풀이**
```javascript
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

console.log("After Sorting:", money);

```

선택 정렬은 다음과 같이 동작한다.

1. 첫 번째 요소부터 시작하여 나머지 요소들 중에서 최소값을 찾는다.
2. 찾은 최소값과 현재 요소를 교환한다.
3. 다음 요소로 이동하여 같은 과정을 반복한다.
4. 마지막 요소까지 정렬이 완료된다.

즉 0번째와 1~3번째 중에서 최소값을 찾은 다음 0번째에 놓고, 1번째와 2~3번째 중에서 최소값을 찾은 다음 1번재에 놓으면 된다.
그러면 앞에서부터 정렬이 될 것이다.

**버블 정렬을 사용한 풀이**

```javascript
const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];
const money = [];

// 배열 생성
for (let i = 0; i < price.length; i++) {
  money.push(price[i] * qty[i]);
}

console.log("Before Sorting:", money);

// 버블 정렬
for (let i = 0; i < money.length - 1; i++) {
  for (let j = 0; j < money.length - i - 1; j++) { // 마지막 요소는 정렬에서 제외
    if (money[j] > money[j + 1]) {
      const tmp = money[j + 1];
      money[j + 1] = money[j];
      money[j] = tmp;
    }
  }
}

console.log("After Sorting:", money);
```

버블 정렬은 다음과 같이 동작한다.

1. 배열의 앞에서부터 시작하여, 인접한 두 요소를 비교한다.
2. 큰 값을 뒤로 보내기 위해, 두 요소의 위치를 교환한다.
3. 한 번의 반복이 끝나면 가장 큰 값이 배열의 끝에 위치한다.
4. 이후 반복에서는 정렬된 마지막 요소를 제외하고 나머지를 정렬한다.


### 문제 6.

문제 4번의 장바구니 내역에서는 모든 장바구니 상품이 개별 배송이라고 한다.
상품금액(판매가*수량)이 8만원 이상인 경우 무료로 배송이 된다고 할 때 무료로 배송되는 항목은 모두 몇 개 인지 구하는 프로그램을 구현하시오.

#### 나의 풀이

```javascript
const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];
let count = 0;

for (let i = 0; i < price.length; i++) {
  if (price[i] * qty[i] >= 80000) {
    count += 1;
  }
}

console.log(count);
```

`count` 변수를 활용하는 단순한 패턴이다.

### 문제 7.
#### 나의 풀이

### 문제 8.
#### 나의 풀이

### 문제 9.
#### 나의 풀이

### 문제 10.
#### 나의 풀이

### 문제 11.
#### 나의 풀이

### 문제 12.
#### 나의 풀이

### 문제 13.
#### 나의 풀이

### 문제 14.
#### 나의 풀이