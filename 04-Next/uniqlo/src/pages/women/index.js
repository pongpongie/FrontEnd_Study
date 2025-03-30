import React, { memo } from "react";

import styled from "styled-components";

const WomenContainer = styled.div`
  background-color: #ff000055;
`;

const Women = memo(() => {
  return (
    <WomenContainer>
      <h2>Women</h2>
    </WomenContainer>
  );
});

export default Women;
