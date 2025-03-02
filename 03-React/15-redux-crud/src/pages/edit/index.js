import React, { memo } from "react";

import styled from "styled-components";

const ProfessorEditContainer = styled.div`
  background-color: #ff000055;
`;

const ProfessorEdit = memo(() => {
  return (
    <ProfessorEditContainer>
      <h2>ProfessorEdit</h2>
    </ProfessorEditContainer>
  );
});

export default ProfessorEdit;
