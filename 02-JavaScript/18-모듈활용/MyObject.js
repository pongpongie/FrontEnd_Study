const my = {
  myname: "my-module",
  kor: function () {
    console.log(this);
    return `${this.myname} 안녕하세요 자바스크립트`;
  },

  eng: () => {
    console.log(this);
    return `${this.myname} hello JS`;
  },
};
