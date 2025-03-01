import React, { memo } from "react";

import styled from "styled-components";

import { plus, minus } from "../../slices/CounterSlice";

const CounterContainer = styled.div``;

const Counter = memo(() => {
  return (
    <CounterContainer>
      <h2>Counter</h2>
    </CounterContainer>
  );
});

export default Counter;
