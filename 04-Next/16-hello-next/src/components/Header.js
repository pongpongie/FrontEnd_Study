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
      <h1>Next.js Demo page</h1>
      <nav>
        <MenuLink href="/">Home</MenuLink>

        {/* 1) /src/pages/about.js 파일을 접속 */}
        {/* 2) /src/pages/about/index.js 파일을 접속 */}
        {/* 두 가지 경우 중에서 (1)번이 우선된다. */}
        <MenuLink href="/about">소개글</MenuLink>
        <MenuLink href="/portfolio">포트폴리오</MenuLink>

        <MenuLink href="/params/hello?num1=100&num2=200">Hello</MenuLink>
        <MenuLink href="/params/world?num1=300&num2=400">World</MenuLink>
      </nav>
    </HeaderContainer>
  );
});

export default Header;
