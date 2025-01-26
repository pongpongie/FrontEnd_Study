import React from "react";

const If2 = () => {
  const isLogin = true;

  return (
    <div>
      <h1>If2</h1>
      {isLogin && <p>로그인 되셨습니다</p>}
    </div>
  );
};

export default If2;
