import React, { memo } from "react";

import styled from "styled-components";

const BabyContainer = styled.div`
  background-color: #ff000055;
`;

const Baby = memo(() => {
  return (
    <BabyContainer>
      <h2>Baby</h2>
    </BabyContainer>
  );
});

export default Baby;
