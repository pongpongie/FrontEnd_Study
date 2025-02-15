import React, { memo } from "react";

import styled from "styled-components";

const MyHooksContainer = styled.div`
  background-color: #ff000055;
`;

const MyHooks = memo(() => {
  return (
    <MyHooksContainer>
      <h2>MyHooks</h2>
    </MyHooksContainer>
  );
});

export default MyHooks;
ㅌ;
