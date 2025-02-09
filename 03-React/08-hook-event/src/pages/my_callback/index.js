import React, { memo } from "react";

import styled from "styled-components";

const MyCallbackContainer = styled.div`
  background-color: #ff000055;
`;

const MyCallback = memo(() => {
  return (
    <MyCallbackContainer>
      <h2>MyCallback</h2>
    </MyCallbackContainer>
  );
});

export default MyCallback;
