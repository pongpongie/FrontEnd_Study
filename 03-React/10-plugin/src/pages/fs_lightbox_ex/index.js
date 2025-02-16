import React, { memo } from "react";

import styled from "styled-components";

const FsLightboxExContainer = styled.div`
  background-color: #ff000055;
`;

const FsLightboxEx = memo(() => {
  return (
    <FsLightboxExContainer>
      <h2>FsLightboxEx</h2>
    </FsLightboxExContainer>
  );
});

export default FsLightboxEx;
