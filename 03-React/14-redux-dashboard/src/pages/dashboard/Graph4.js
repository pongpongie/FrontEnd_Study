import React, { memo } from "react";

import styled from "styled-components";
import mq from "../../components/MediaQuery";

import { useSelector } from "react-redux";

const Graph4Container = styled.div`
  background-color: #06f2;
  width: 50%;

  ${mq.maxWidth("md")`
    width: 100%
  `}

  .container {
    margin: 10px;
    height: 300px;
  }
`;

const Graph4 = memo(() => {
  const { item } = useSelector((state) => state.TitanicSlice);

  return (
    <Graph4Container>
      <div className="container">
        {item && JSON.stringify(item).substring(0, 50)}
      </div>
    </Graph4Container>
  );
});

export default Graph4;
