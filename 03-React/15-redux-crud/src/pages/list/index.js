import React, { memo } from "react";

import styled from "styled-components";

const ProfessorListContainer = styled.div`
  background-color: #ff000055;
`;

const ProfessorList = memo(() => {
  return (
    <ProfessorListContainer>
      <h2>ProfessorList</h2>
    </ProfessorListContainer>
  );
});

export default ProfessorList;
