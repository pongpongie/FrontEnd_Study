import React, { memo, useState } from "react";

import styled from "styled-components";

import dayjs from "dayjs";

const DateRange1Container = styled.div``;

const DateRange1 = memo(() => {
  const day = dayjs();

  const [myDate, setMydate] = useState({
    startDate: day.format("YYYY-MM-DD"),
    endDate: day.format("YYYY-MM-DD"),
  });
  return (
    <DateRange1Container>
      <h2>DateChange2</h2>
      <h3>
        {myDate.startDate} ~ {myDate.endDate}
      </h3>
    </DateRange1Container>
  );
});

export default DateRange1;
