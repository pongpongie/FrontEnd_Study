import React, { memo } from "react";

import styled from "styled-components";

const DateRange2Container = styled.div`
  background-color: #ff000055;
`;

const DateRange2 = memo(() => {
  return (
    <DateRange2Container>
      <h2>DateRange2</h2>
    </DateRange2Container>
  );
});

export default DateRange2;
