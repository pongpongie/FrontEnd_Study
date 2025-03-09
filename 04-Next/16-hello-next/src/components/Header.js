import React, { memo } from "react";

import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #ff000055;
`;

const Header = memo(() => {
  return (
    <HeaderContainer>
      <h2>Header</h2>
    </HeaderContainer>
  );
});

export default Header;
