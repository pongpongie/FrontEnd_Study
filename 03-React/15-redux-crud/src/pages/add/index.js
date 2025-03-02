import React, { memo } from "react";

import styled from "styled-components";

const ProfessorAddContainer = styled.div`
  background-color: #ff000055;
`;

const ProfessorAdd = memo(() => {
  return (
    <ProfessorAddContainer>
      <h2>ProfessorAdd</h2>
    </ProfessorAddContainer>
  );
});

export default ProfessorAdd;
