import React, { memo } from "react";

import styled from "styled-components";

const DateRange1Container = styled.div`
  background-color: #ff000055;
`;

const DateRange1 = memo(() => {
  return (
    <DateRange1Container>
      <h2>DateRange1</h2>
    </DateRange1Container>
  );
});

export default DateRange1;
