import React, { memo } from "react";

import styled from "styled-components";

const HelloContainer = styled.div``;

const Hello = memo(({ mode, num1, num2 }) => {
  return (
    <HelloContainer>
      <h2>Hello</h2>
      <p>mode: {mode}</p>
      <ul>
        <li>num1={num1}</li>
        <li>num2={num2}</li>
      </ul>
    </HelloContainer>
  );
});

Hello.getInitialProps = async (context) => {
  return {
    mode: context.req ? "backend" : "front",
    ...context.query,
  };
};

export default Hello;
