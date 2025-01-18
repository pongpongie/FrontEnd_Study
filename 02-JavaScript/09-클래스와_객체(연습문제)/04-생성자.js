class MyUnit {
  name;
  speed;
  dps;

  constructor(name, speed, dps) {
    this.name = name;
    this.speed = speed;
    this.dps = dps;
    console.log(
      `>>> 생성자를 통한 ${this.name} 객체 초기화 완료 (speed : ${this.speed}, dps : ${this.dps})`
    );
  }

  move(where) {
    console.log(
      `${this.name}(이)가 ${where}(으)로 ${this.speed}의 속력으로 이동합니다.`
    );
  }

  attack(target) {
    console.log(
      `${this.name}(이)가 ${target}에게 ${this.dps}의 데미지를 입힙니다.`
    );
  }
}

// const marin = new MyUnit("기사", 5, 10);
// marin.move("집");
// marin.attack("집");

const team = [
  new MyUnit("기사", 5, 10),
  new MyUnit("힐러", 15, 1),
  new MyUnit("성직자", 7, 20),
];

for (t of team) {
  t.move("던전");
  t.attack("몬스터");
}
