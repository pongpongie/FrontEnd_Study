import React, { memo } from "react";

import styled from "styled-components";

const GradeContainer = styled.div`
  background-color: #ff000055;
`;

const Grade = memo(() => {
  return (
    <GradeContainer>
      <h2>Grade</h2>
    </GradeContainer>
  );
});

export default Grade;
