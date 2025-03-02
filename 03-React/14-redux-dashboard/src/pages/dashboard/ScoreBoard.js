import React, { memo, useMemo } from "react";

import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import CountUp from "react-countup";

import mq from "../../components/MediaQuery";

const ScoreBoardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .my-counter {
    margin: 0 10px;
    width: 25%;
    height: 140px;
    background-color: #06f6;
    border-radius: 10px;
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    h2 {
      font-size: 29px;
      margin: 0;
      font-weight: normal;
      color: #fff;
      margin-bottom: 10px;

      ${mq.maxWidth("lg")`
          font-size: 15px
        `}
      ${mq.maxWidth("md")`
          font-size: 10px
        `}
    }

    .my-counter-number {
      font-size: 45px;
      font-weight: 700;
      margin: 0%;
      color: #fff;
      &.per:after {
        content: "%";
      }
    }
  }
`;

const ScoreBoard = memo(() => {
  const { item } = useSelector((state) => state.TitanicSlice);

  const [totalPassenger, totalSurvived, totalDead, survivalRate] =
    useMemo(() => {
      if (!item) {
        return [0, 0, 0, 0];
      }

      const totalPassenger = item.length;

      const totalSurvived = item.filter((v, i) => v.survived).length;

      const totalDead = totalPassenger - totalSurvived;

      const survivalRate = (totalSurvived / totalPassenger) * 100;

      return [totalPassenger, totalSurvived, totalDead, survivalRate];
    }, [item]);

  return (
    <ScoreBoardContainer>
      <div className="my-counter">
        <h2>전체 탑승객 수</h2>
        <CountUp
          start={1}
          end={totalPassenger}
          duration={5}
          enableScrollSpy={true}
          scrollSpyDelay={1000}
          className="my-counter-number"
        />
      </div>
      <div className="my-counter">
        <h2>생존자 수</h2>
        <CountUp
          start={1}
          end={totalSurvived}
          duration={5}
          startOnMount={false}
          enableScrollSpy={true}
          scrollSpyDelay={1000}
          className="my-counter-number"
        />
      </div>
      <div className="my-counter">
        <h2>사망자 수</h2>
        <CountUp
          start={1}
          end={totalDead}
          duration={5}
          startOnMount={false}
          enableScrollSpy={true}
          className="my-counter-number"
        />
      </div>
      <div className="my-counter">
        <h2>생존율</h2>
        <CountUp
          start={1}
          end={survivalRate}
          duration={5}
          startOnMount={false}
          enableScrollSpy={true}
          className="my-counter-number per"
        />
      </div>
    </ScoreBoardContainer>
  );
});

export default ScoreBoard;
