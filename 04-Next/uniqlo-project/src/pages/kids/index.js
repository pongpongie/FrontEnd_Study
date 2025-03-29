import React, { memo } from "react";

import styled from "styled-components";

const KidsContainer = styled.div`
  background-color: #ff000055;
`;

const Kids = memo(() => {
  return (
    <KidsContainer>
      <h2>Kids</h2>
    </KidsContainer>
  );
});

export default Kids;
