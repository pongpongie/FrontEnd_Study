import React, { memo } from "react";

import styled from "styled-components";

const MainContainer = styled.section`
  background-color: #ff660077;
`;

const Main = memo(() => {
  return (
    <MainContainer>
      <h2>Main</h2>
    </MainContainer>
  );
});

export default Main;
