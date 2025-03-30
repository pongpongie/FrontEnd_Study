import React, { memo } from "react";

import styled from "styled-components";

const MenContainer = styled.div`
  background-color: #ff000055;
`;

const Men = memo(() => {
  return (
    <MenContainer>
      <h2>Men</h2>
    </MenContainer>
  );
});

export default Men;
