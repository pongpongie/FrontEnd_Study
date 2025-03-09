import React, { memo } from "react";

import styled from "styled-components";

const AboutContainer = styled.div`
  background-color: #ff000055;
`;

const About = memo(() => {
  return (
    <AboutContainer>
      <h2>About</h2>
    </AboutContainer>
  );
});

export default About;
