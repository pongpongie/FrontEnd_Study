import React, { memo } from "react";

import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #ffff0055;
`;

const Footer = memo(() => {
  return (
    <FooterContainer>
      <h2>Footer</h2>
    </FooterContainer>
  );
});

export default Footer;
