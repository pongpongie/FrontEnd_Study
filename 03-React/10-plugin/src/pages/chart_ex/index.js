import React, { memo } from "react";

import styled from "styled-components";

const ChartExContainer = styled.div`
  background-color: #ff000055;
`;

const ChartEx = memo(() => {
  return (
    <ChartExContainer>
      <h2>ChartEx</h2>
    </ChartExContainer>
  );
});

export default ChartEx;
