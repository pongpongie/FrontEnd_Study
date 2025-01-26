import React from "react";

const If1 = () => {
  const btnLogin = (isLogin) => {
    return isLogin === true ? (
      <button type="button">Logout</button>
    ) : (
      <button type="button">LogIn</button>
    );
  };

  return (
    <div>
      <h1>If1</h1>
      {btnLogin(false)}
    </div>
  );
};

export default If1;
