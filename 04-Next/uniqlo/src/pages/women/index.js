import React, { memo } from "react";

import styled from "styled-components";
import Swiper from "@/components/Swiper";

const WomenContainer = styled.div`
  background-color: #ff000055;
`;

const Women = memo(() => {
  return (
    <WomenContainer>
      <h2>Women</h2>
      <Swiper />
    </WomenContainer>
  );
});

export default Women;
