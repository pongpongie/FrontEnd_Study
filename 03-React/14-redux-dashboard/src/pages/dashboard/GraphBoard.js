import React, { memo } from "react";

import styled from "styled-components";

import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
import Graph3 from "./Graph3";
import Graph4 from "./Graph4";
import Graph5 from "./Graph5";

const GraphBoardContainer = styled.div`
  margin: 20px -10px;
  display: flex;
  flex-wrap: wrap;
`;

const GraphBoard = memo(() => {
  return (
    <GraphBoardContainer>
      <Graph1 />
      <Graph2 />
      <Graph3 />
      <Graph4 />
      <Graph5 />
    </GraphBoardContainer>
  );
});

export default GraphBoard;
