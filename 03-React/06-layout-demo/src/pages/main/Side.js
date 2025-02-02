import React, { memo } from "react";
import styled from "styled-components";
import FakeImg from "../../components/FakeImg";
import mq from "../../components/MediaQuery";

const SideConatiner = styled.div`
  box-sizing: border-box;
  flex: 0 0 360px;
  border-right: 1px solid #d5d5d5;
  background-color: #eee;
  padding: 20px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin: 10px auto;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    margin: 10px auto;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 7px;
  }

  ${mq.maxWidth("sm")`
    flex: 0 0 100%;
    border-right: 0px;
  `}
`;

const Side = memo(() => {
  return (
    <SideConatiner>
      <h2>About me</h2>
      <h3>Photo of Me</h3>
      <FakeImg height="200">
        <img
        // height={160}
        // width={300}
        // src="https://avatars.githubusercontent.com/u/98201095?v=4"
        />
      </FakeImg>
      <p>Some Text about me in Sunt in culpa mea culpa mea culpa</p>
      <hr />
      <h2>More Text</h2>
      <p>Sunt in culpa mea culpa mea culpa</p>
      <FakeImg height="60">Image</FakeImg>
      <br />
      <FakeImg height="60">Image</FakeImg>
      <br />
      <FakeImg height="60">Image</FakeImg>
      <br />
    </SideConatiner>
  );
});

export default Side;
