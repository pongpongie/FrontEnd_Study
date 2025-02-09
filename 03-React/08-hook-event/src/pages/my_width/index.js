import React, { memo } from "react";

import styled from "styled-components";

const MyWidthContainer = styled.div`
  background-color: #ff000055;
`;

const MyWidth = memo(() => {
  return (
    <MyWidthContainer>
      <h2>MyWidth</h2>
    </MyWidthContainer>
  );
});

export default MyWidth;
