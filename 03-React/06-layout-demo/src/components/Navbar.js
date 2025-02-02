import React, { memo } from "react";

import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: #0066ff55;
`;

const Navbar = memo(() => {
  return (
    <NavbarContainer>
      <h2>Navbar</h2>
    </NavbarContainer>
  );
});

export default Navbar;
