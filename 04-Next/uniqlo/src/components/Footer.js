import React, { memo } from "react";

import styled from "styled-components";

const FooterContainer = styled.div`
  border-top: 1px solid #ccc;
  color: #000;
  padding: 10px;
  text-align: center;
`;

const Footer = memo(() => {
  return (
    <FooterContainer>
      <h2>copyright&copy;2025. megastudy-it</h2>
    </FooterContainer>
  );
});

export default Footer;
