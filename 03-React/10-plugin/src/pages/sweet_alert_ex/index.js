import React, { memo } from "react";

import styled from "styled-components";

const SweetAlertExContainer = styled.div`
  background-color: #ff000055;
`;

const SweetAlertEx = memo(() => {
  return (
    <SweetAlertExContainer>
      <h2>SweetAlertEx</h2>
    </SweetAlertExContainer>
  );
});

export default SweetAlertEx;
