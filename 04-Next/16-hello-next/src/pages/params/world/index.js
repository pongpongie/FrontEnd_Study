import React, { memo } from "react";

import styled from "styled-components";

const WorldContainer = styled.div``;

const World = memo(({ mode, num1, num2 }) => {
  return (
    <WorldContainer>
      <h2>World</h2>
      <p>mode: {mode}</p>
      <ul>
        <li>num1={num1}</li>
        <li>num2={num2}</li>
      </ul>
    </WorldContainer>
  );
});

World.getInitialProps = async (context) => {
  return {
    mode: context.req ? "backend" : "front",
    ...context.query,
  };
};

export default World;
