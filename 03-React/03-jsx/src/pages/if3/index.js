import React from "react";

const If3 = () => {
  const isLogin = false;

  return (
    <div>
      <h1>If3</h1>
      {isLogin || <p>로그인이 필요합니다.</p>}
    </div>
  );
};

export default If3;
