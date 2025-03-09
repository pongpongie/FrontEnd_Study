import React, { memo } from "react";

import styled from "styled-components";

const IndexContainer = styled.div`
  padding: 50px 0;
  text-align: center;
`;

const Index = memo(() => {
  return (
    <IndexContainer>
      <h1>
        <i className="fa-solid fa-house"></i> index
      </h1>
      <p>여기는 index.js입니다.</p>
    </IndexContainer>
  );
});

export default Index;
