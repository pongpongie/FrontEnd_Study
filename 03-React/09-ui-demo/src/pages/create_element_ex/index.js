import React, { memo } from "react";

import styled from "styled-components";

const CreateElementExContainer = styled.div`
  background-color: #ff000055;
`;

const CreateElementEx = memo(() => {
  return (
    <CreateElementExContainer>
      <h2>CreateElementEx</h2>
    </CreateElementExContainer>
  );
});

export default CreateElementEx;
