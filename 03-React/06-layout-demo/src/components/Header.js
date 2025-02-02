import React, { memo } from "react";

import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #ffff0055;
`;

const Header = memo(() => {
  return (
    <HeaderContainer>
      <h2>Header</h2>
    </HeaderContainer>
  );
});

export default Header;
