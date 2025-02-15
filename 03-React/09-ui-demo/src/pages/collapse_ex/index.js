import React, { memo } from "react";

import styled from "styled-components";

const IndexContainer = styled.div`
  background-color: #ff000055;
`;

const Index = memo(() => {
  return (
    <IndexContainer>
      <h2>Index</h2>
    </IndexContainer>
  );
});

export default Index;
