const msg = "Life is too short, you need javascript";

// 파라미터로 설정된 위치의 글자를 리턴, 0부터 카운트
const str2nd = msg.charAt(2);
console.log("두 번쨰 글자", str2nd);

// 모든 문자열은 배열 취급 -> 인덱스 접근 가능
console.log(msg[2]);

// indexOf - 파라미터로 전달된 내용이 처음 나타나는 위치를 리턴
const p1 = msg.indexOf("f");
console.log("첫 번쨰 f ", p1);

// 찾지 못했을 경우 -1
console.log("z가 나타나는 위치 : ", msg.indexOf("z"));

// 단어, 문장으로 검색 시 내용이 시작되는 첫 글자의 위치 반환
console.log("Short is here :", msg.indexOf("short"));

// indexOf의 두 번쨰 파라미터는 첫 번째 파라미터의 글자를 찾기 시작하는 위치를 나타냄
const p2 = msg.indexOf("i");
// 첫 번째 i 이후부터 찾기
const p3 = msg.indexOf("i", p2 + 1);

console.log(p3);

// lastIndexOf() - 파라미터로 전달한 글자가 마지막으로 나타나는 위치를 리턴함
// 단 이 위치를 문자열의 끝에서부터가 아닌 문자열의 처음부터 셈
const p4 = msg.lastIndexOf("a");
console.log("a의 마지막 위치", p4);

// substring() - 잘라내기 위한 시작 위치와 끝 위치를 파라미터로 설정
// 지정된 끝 위치의 직전 글자까지
const substring1 = msg.substring(0, 17);
console.log(substring1);

// 두 번째 파라미터 생략할 경우, 지정된 위치부터 끝까지
const substring2 = msg.substring(19);
console.log(substring2);

// 대문자화, 소문자화
const upper = msg.toUpperCase();
const lower = upper.toLowerCase();

console.log(upper, lower);

// 앞, 뒤 공백 자르기
const src1 = "    Hello World    ";
console.log(src1);
console.log(src1.trim());

// 파라미터 기준으로 잘라 배열로 반환
const txt = "HTML,CSS,JavaScript";
console.log(typeof txt.split(","));
console.log(txt.split(","));

// .replace() - 첫 번째 항목만 변경
const txt2 = txt.replace(",", "$");
console.log(txt2);

// .replaceAll() - 도구 변경
const txt3 = "Hello Javascript, World Javascript";
console.log(txt3.replaceAll("Javascript", "자바스크립트"));
