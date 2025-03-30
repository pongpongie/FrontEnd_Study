import React, { memo } from "react";

import styled from "styled-components";

import MenuLink from "@/components/MenuLink";

const HeaderContainer = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
`;

const Header = memo(() => {
  return (
    <HeaderContainer>
      <nav>
        <MenuLink href="/">WOMEN</MenuLink>
        <MenuLink href="/men">MEN</MenuLink>
        <MenuLink href="/kids">KIDS</MenuLink>
        <MenuLink href="/baby">BABY</MenuLink>
      </nav>
    </HeaderContainer>
  );
});

export default Header;
