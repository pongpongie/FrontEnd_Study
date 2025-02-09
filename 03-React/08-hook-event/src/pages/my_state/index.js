import React, { memo, useState } from "react";

import styled from "styled-components";

const MyStateContainer = styled.div``;

const MyState = memo(() => {
  const [myName, setMyName] = useState("");
  const [myPoint, setMyPoint] = useState(0);

  // const onMyNameChange = (e) => {
  //   setMyName(e.currentTarget.value);
  // };

  return (
    <MyStateContainer>
      <h2>MyState</h2>

      <div>
        <label htmlFor="myNameInput">이름:</label>
        <input
          type="text"
          id="myNameInput"
          value={myName}
          onChange={(e) => setMyName(e.currentTarget.value)}
        />
      </div>

      <div>
        <label htmlFor="myPointInput">점수:</label>
        <input
          type="range"
          id="myPointInput"
          min="0"
          max="100"
          value={myPoint}
          onChange={(e) => setMyPoint(e.currentTarget.value)}
        />
      </div>

      <h2>
        {myName}님의 점수는 {myPoint}점입니다.
      </h2>
    </MyStateContainer>
  );
});

export default MyState;
