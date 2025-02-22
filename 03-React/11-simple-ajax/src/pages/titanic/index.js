import React, { memo } from "react";

import styled from "styled-components";

const TitanicContainer = styled.div`
  background-color: #ff000055;
`;

const Titanic = memo(() => {
  return (
    <TitanicContainer>
      <h2>Titanic</h2>
    </TitanicContainer>
  );
});

export default Titanic;
