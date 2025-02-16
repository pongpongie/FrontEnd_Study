import React, { memo } from "react";

import styled from "styled-components";

import CountUp from "react-countup";

const CountUpExContainer = styled.div`
  .counter-box {
    display: flex;
    padding: 100px 50px;
    justify-content: space-around;

    .my-counter {
      font-size: 80px;
      font-weight: bold;
      width: 300px;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #555;
      color: #fff;
    }
  }
`;

const CountUpEx = memo(() => {
  return (
    <CountUpExContainer>
      <h2>CountUpEx</h2>

      <hr />
      <div
        style={{
          height: "3000px",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          fontSize: "32px",
        }}
      >
        아래로 스크롤
      </div>
      <hr />

      <div className="counter-box">
        <CountUp
          start={1}
          end={345}
          duration={5}
          enableScrollSpy
          scrollSpyDelay={1000}
          className="my-counter"
        />
        <CountUp
          start={1}
          end={234}
          duration={5}
          enableScrollSpy
          scrollSpyDelay={500}
          className="my-counter"
        />
      </div>
    </CountUpExContainer>
  );
});

export default CountUpEx;
