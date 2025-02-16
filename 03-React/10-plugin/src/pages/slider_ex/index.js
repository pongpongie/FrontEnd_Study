import React, { memo } from "react";

import styled from "styled-components";

const SliderExContainer = styled.div`
  background-color: #ff000055;
`;

const SliderEx = memo(() => {
  return (
    <SliderExContainer>
      <h2>SliderEx</h2>
    </SliderExContainer>
  );
});

export default SliderEx;
