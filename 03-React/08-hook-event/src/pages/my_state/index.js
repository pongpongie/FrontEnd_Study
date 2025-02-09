import React, { memo } from "react";

import styled from "styled-components";

const MyStateContainer = styled.div`
  background-color: #ff000055;
`;

const MyState = memo(() => {
  return (
    <MyStateContainer>
      <h2>MyState</h2>
    </MyStateContainer>
  );
});

export default MyState;
