import React from "react";

import sample from "../../assets/img/sample.png";

const InlineCss = () => {
  const myStyle = {
    backgroundColor: "#f60",
    fontSize: "20px",
    color: "#06f",
    fontWeight: "bold",
    pading: "10px 25px",
    marginBottom: "10px",
  };

  return (
    <div>
      <h2>InlineCss</h2>
      <h3>변수로 정의된 CSS 참조하기</h3>
      <div style={myStyle}>Hello React CSS (1)</div>

      <h3>직접 참조하기</h3>
      <div
        style={{
          backgroundColor: "#ff0",
          fontSize: "20px",
          color: "#00f",
          fontWeight: "bold",
          pading: "10px 25px",
          marginBottom: "10px",
        }}
      >
        Hello React CSS (2)
      </div>

      <h3>이미지 참조하기</h3>
      <img src={sample} width="240" height="240" alt="샘플이미지" />

      <img
        src={`${process.env.PUBLIC_URL}/logo192.png`}
        width="240"
        height="240"
        alt="react"
      />
    </div>
  );
};

export default InlineCss;
