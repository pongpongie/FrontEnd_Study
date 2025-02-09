import React, { memo } from "react";

import styled from "styled-components";

const MyMemoContainer = styled.div`
  background-color: #ff000055;
`;

const MyMemo = memo(() => {
  return (
    <MyMemoContainer>
      <h2>MyMemo</h2>
    </MyMemoContainer>
  );
});

export default MyMemo;
