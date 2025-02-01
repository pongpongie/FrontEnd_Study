import React from "react";

// 외부 css 파일 참조 --> 참조변수 이름을 지정하지 않는다 (그냥 import만 함)
import "../../assets/css/mystyle.css";

const CssClass = () => {
  return (
    <div>
      <h1>CssClass</h1>
      <div className="my-css-box" />
    </div>
  );
};

export default CssClass;
