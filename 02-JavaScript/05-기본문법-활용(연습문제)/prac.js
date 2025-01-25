// 문제 1. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
for (let i = 0; i < 10; i++) {
  if ((10 - i) % 2 != 0) {
    console.log(10 - i);
  }
}

// =========================================================================
// 문제 2. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
let i = 0;
while (i < 10) {
  i++;
  if ((10 - i) % 2 != 0) {
    console.log(10 - i);
  }
}

// let i = 9;
// while (i > 0) {
//   console.log(i)
//   i -= 2;
// }

// let i = 0;

// while (i < 10) {
//   const num = 9-i
//   if (num%2 == 1) {
//     console.log(num)
//   }
//   i++
// }

// let i = 0;

// while (i < 10) {
//   const num = 9 - i;
//   console.log(num);
//   i += 2;
// }

// 문제 3. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
for (let i = 0; i < 20; i++) {
  if (i % 2 == 0 || i % 3 == 0) {
    console.log(i);
  }
}

// 문제 4. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하고 경우의 수는 총 몇가지 인지를 아래와 같이 출력하는 코드를 작성하시오.
/* 
[ 1, 5 ]
[ 2, 4 ]
[ 3, 3 ]
[ 4, 2 ]
[ 5, 1 ] 
경우의 수는 5개 입니다.
 */

let cnt = 0;

for (let i = 1; i < 7; i++) {
  for (let j = 1; j < 7; j++) {
    if (i + j == 6) {
      console.log(`[${i}, ${j}]`);
      cnt++;
    }
  }
}

console.log("경우의 수는 %d개 입니다.", cnt);

// 문제 5. for문을 중첩하여 실행하여 아래와 같은 출력 결과를 만드시오.
/* 
 0 1 2 3
 1 2 3 4
 2 3 4 5
 3 4 5 6
 */

for (let i = 0; i < 4; i++) {
  let str = "";
  for (let j = 0; j < 4; j++) {
    str += i + j;
  }
  console.log(str);
}

for (let i = 0; i < 4; i++) {
  let str = "";
  for (let j = i; j < i + 4; j++) {
    str += j;
  }
  console.log(str);
}

// 문제 6.아래와 같은 출력 결과가 나타나도록 중첩 반복문을 for문 형식으로 구현하시오.
/* 
1
12
123
1234
12345
123456
1234567
*/
let str2 = "";

for (let i = 1; i < 8; i++) {
  str2 = "";
  for (let j = 1; j < i + 1; j++) {
    str2 += j;
  }
  console.log(str2);
}

// 문제 7. number라는 변수를 정의하고 1 혹은 2의 값을 임의로 할당하시오. 이 변수에는 1이나 2밖에 저장될 수 없습니다.
// 구구단 프로그램을 만들고자 한다.전체를 출력하는 구구단이 아니라 number가 1일 때는 홀수 단(3, 5, 7, 9), number가 2일 때는 입력하면 짝수 단(2, 4, 6, 8)을 출력하는 프로그램을 완성하시오.

// let number = Math.random() < 0.5 ? 1 : 2;

// for (let i = 2; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     if (number === 1 && i % 2 != 0) {
//       console.log("%d단 : %d x %d = %d", i, i, j, i * j);
//     } else if (number === 2 && i % 2 == 0) {
//       console.log("%d단 : %d x %d = %d", i, i, j, i * j);
//     }
//   }
// }

// let number = Math.random() > 0.5 ? 1 : 2;

// let start = number === 1 ? 3 : 2;

// for (let i = start; i < 10; i += 2) {
//   console.group(`${i}단`);
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.groupEnd();
// }

let number = Math.random() > 0.5 ? 1 : 2;

for (let i = 4 - number; i < 10; i += 2) {
  console.group(`${i}단`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.groupEnd();
}
