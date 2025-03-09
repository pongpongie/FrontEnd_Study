import React, { memo } from "react";

import styled from "styled-components";

const PortfolioContainer = styled.div`
  background-color: #ff000055;
`;

const Portfolio = memo(() => {
  return (
    <PortfolioContainer>
      <h2>Portfolio</h2>
    </PortfolioContainer>
  );
});

export default Portfolio;
