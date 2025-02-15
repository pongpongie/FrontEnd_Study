import React, { memo } from "react";

import styled from "styled-components";

const SubmenuExContainer = styled.div`
  background-color: #ff000055;
`;

const SubmenuEx = memo(() => {
  return (
    <SubmenuExContainer>
      <h2>SubmenuEx</h2>
    </SubmenuExContainer>
  );
});

export default SubmenuEx;
