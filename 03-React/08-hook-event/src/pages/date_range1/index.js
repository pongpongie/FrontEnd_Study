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
      <div>
        <button
          type="button"
          onClick={(e) => {
            const newDate = { ...myDate };
            newDate.startDate = day.add(-15, "d").format("YYYY-MM-DD");
            setMydate(newDate);
          }}
        >
          15일
        </button>
        <button
          type="button"
          onClick={(e) => {
            const newDate = { ...myDate };
            newDate.startDate = day.add(-1, "M").format("YYYY-MM-DD");
            setMydate(newDate);
          }}
        >
          1개월
        </button>
        <button
          type="button"
          onClick={(e) => {
            const newDate = { ...myDate };
            newDate.startDate = day.add(-3, "M").format("YYYY-MM-DD");
            setMydate(newDate);
          }}
        >
          3개월
        </button>
        <button
          type="button"
          onClick={(e) => {
            const newDate = { ...myDate };
            newDate.startDate = day.add(-6, "M").format("YYYY-MM-DD");
            setMydate(newDate);
          }}
        >
          6개월
        </button>
        <button
          type="button"
          onClick={(e) => {
            const newDate = { ...myDate };
            newDate.startDate = day.add(-6, "M").format("YYYY-MM-DD");
            setMydate(newDate);
          }}
        >
          1년
        </button>
      </div>
    </DateRange1Container>
  );
});

export default DateRange1;
