import React, { memo } from "react";

import styled from "styled-components";

const TrafficAccContainer = styled.div`
  background-color: #ff000055;
`;

const TrafficAcc = memo(() => {
  return (
    <TrafficAccContainer>
      <h2>TrafficAcc</h2>
    </TrafficAccContainer>
  );
});

export default TrafficAcc;
