const company = {
  name: "우아한형제들",
  since: 2013,
  department: ["기획팀", "디자인팀", "개발팀"],
};

// . 을 통한 접근을 권장하나, 다양하게 접근 가능
// 각각의 차이는 무엇일까?
console.log(company.name);
console.log(company["since"]);
console.log(company.department[0]);
console.log(company["department"][2]);
