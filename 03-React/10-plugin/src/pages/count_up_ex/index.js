import React, { memo } from "react";

import styled from "styled-components";

const CountUpExContainer = styled.div`
  background-color: #ff000055;
`;

const CountUpEx = memo(() => {
  return (
    <CountUpExContainer>
      <h2>CountUpEx</h2>
    </CountUpExContainer>
  );
});

export default CountUpEx;
