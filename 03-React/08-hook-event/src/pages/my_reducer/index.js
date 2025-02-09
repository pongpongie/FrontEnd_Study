import React, { memo } from "react";

import styled from "styled-components";

const MyReducerContainer = styled.div`
  background-color: #ff000055;
`;

const MyReducer = memo(() => {
  return (
    <MyReducerContainer>
      <h2>MyReducer</h2>
    </MyReducerContainer>
  );
});

export default MyReducer;
