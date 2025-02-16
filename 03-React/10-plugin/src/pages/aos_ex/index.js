import React, { memo } from "react";

import styled from "styled-components";

const AosExContainer = styled.div`
  background-color: #ff000055;
`;

const AosEx = memo(() => {
  return (
    <AosExContainer>
      <h2>AosEx</h2>
    </AosExContainer>
  );
});

export default AosEx;
