import React, { memo } from "react";

import styled from "styled-components";

const TabExContainer = styled.div`
  background-color: #ff000055;
`;

const TabEx = memo(() => {
  return (
    <TabExContainer>
      <h2>TabEx</h2>
    </TabExContainer>
  );
});

export default TabEx;
