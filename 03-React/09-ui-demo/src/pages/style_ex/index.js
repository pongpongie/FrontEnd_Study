import React, { memo } from "react";

import styled from "styled-components";

const StyleExContainer = styled.div`
  background-color: #ff000055;
`;

const StyleEx = memo(() => {
  return (
    <StyleExContainer>
      <h2>StyleEx</h2>
    </StyleExContainer>
  );
});

export default StyleEx;
