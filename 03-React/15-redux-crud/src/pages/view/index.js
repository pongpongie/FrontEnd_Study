import React, { memo } from "react";

import styled from "styled-components";

const ProfessorViewContainer = styled.div`
  background-color: #ff000055;
`;

const ProfessorView = memo(() => {
  return (
    <ProfessorViewContainer>
      <h2>ProfessorView</h2>
    </ProfessorViewContainer>
  );
});

export default ProfessorView;
