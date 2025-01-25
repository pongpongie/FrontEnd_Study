/*
6행 7열로 구성된 2차 배열을 준비하고, 배열의 모든 칸에 1무터 순차적으로 증가하는 값을 할당하라.
단 i가 0일때 j가 3보다 작다면 0을 대입하고, 인덱스가 3인 위치부터 1씩 증가하는 겂을 할당해야 한다.
또한 counter가 30보가 크다면 그 자리에는 0을 대신 할당해야 한다.
*/

let data = new Array(6);

for (let i = 0; i < data.length; i++) {
  data[i] = new Array(7);
}

console.log(data);

let counter = 1;

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    if ((i === 0 && j < 3) || counter > 30) {
      data[i][j] = 0;
    } else {
      data[i][j] = counter;
      counter++;
    }
  }
}

console.log(data);

let str = "<table>";

for (let i = 0; i < data.length; i++) {
  str += "<tr>";
  for (let j = 0; j < data[i].length; j++) {
    if (data[i][j] === 0) {
      str += "<td></td>";
    } else {
      str += "<td>" + data[i][j] + "</td>";
    }
  }
  str += "</tr>";
}
str += "</table>";

console.log(str);
