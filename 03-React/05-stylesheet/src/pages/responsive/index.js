import React from "react";
import styled from "styled-components";
import breakpoints from "styled-components-breakpoints";

const sizes = {
  sm: 600,
  md: 768,
  lg: 992,
  xl: 1200,
};

const mq = breakpoints(sizes);

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled.div`
  box-sizing: border-box;
  padding: 20px;
  background-color: ${(props) => props.bgcolor || "#eee"};

  width: 100%;

  ${mq.minWidth("sm")`
    width: 50%
  `}

  ${mq.minWidth("lg")`
    width: 25%
  `}
`;

const Responsive = () => {
  return (
    <div>
      <h1>Responsive</h1>
      <h2>Flex를 사용한 반응형 5열 레이아웃</h2>

      <Container>
        <Column bgcolor="#aaa">
          <h2>Colomn1</h2>
          <p>Some text...</p>
        </Column>
        <Column bgcolor="#bbb">
          <h2>Colomn2</h2>
          <p>Some text...</p>
        </Column>
        <Column bgcolor="#ccc">
          <h2>Colomn3</h2>
          <p>Some text...</p>
        </Column>
        <Column bgcolor="#ddd">
          <h2>Colomn4</h2>
          <p>Some text...</p>
        </Column>
        <Column bgcolor="#eee">
          <h2>Colomn5</h2>
          <p>Some text...</p>
        </Column>
      </Container>
    </div>
  );
};

export default Responsive;
