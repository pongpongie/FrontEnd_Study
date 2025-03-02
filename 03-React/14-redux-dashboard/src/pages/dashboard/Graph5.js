import React, { memo, useMemo } from "react";

import styled from "styled-components";
import mq from "../../components/MediaQuery";

import { useSelector } from "react-redux";

import {
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { Pie } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement);

const Graph5Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .container {
    height: 500px;
    width: 33.3%;
    margin-bottom: 25px;
    ${mq.maxWidth("md")`
    width: 100%
  `};
  }
`;

const Graph5 = memo(() => {
  const { item } = useSelector((state) => state.TitanicSlice);

  const { passengers, survived, dead } = useMemo(() => {
    if (!item) {
      return { passengers: [0, 0, 0], survived: [0, 0, 0], dead: [0, 0, 0] };
    }

    const pclassData = item.reduce(
      (acc, cur) => {
        const pclass = cur.pclass;
        acc.passengers[pclass - 1]++;

        if (cur.survived) {
          acc.survived[pclass - 1]++;
        } else {
          acc.dead[pclass - 1]++;
        }
        return acc;
      },
      { passengers: [0, 0, 0], survived: [0, 0, 0], dead: [0, 0, 0] }
    );

    console.group("Graph5");
    console.log(pclassData);
    console.groupEnd();

    return pclassData;
  }, [item]);

  return (
    <Graph5Container>
      <div className="container">
        {passengers && (
          <Pie
            data={{
              labels: ["1등급", "2등급", "3등급"],
              datasets: [
                {
                  label: "명",
                  data: passengers,
                  backgroundColor: [
                    "rgba(255, 99 ,132, 0.6)",
                    "rgba(54, 162 , 235, 0.6)",
                    "rgba(255, 206 , 86, 0.6)",
                  ],
                  borderColor: [
                    "rgba(255, 99 ,132, 1)",
                    "rgba(54, 162 , 235, 1)",
                    "rgba(255, 206 , 86, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { position: "left" },
                title: {
                  display: true,
                  text: "객실 등급별 탑승객 비율",
                  font: { size: 18, color: "#000" },
                },
              },
            }}
          />
        )}
      </div>
      <div className="container">
        {survived && (
          <Pie
            data={{
              labels: ["1등급", "2등급", "3등급"],
              datasets: [
                {
                  label: "명",
                  data: survived,
                  backgroundColor: [
                    "rgba(255, 99 ,132, 0.6)",
                    "rgba(54, 162 , 235, 0.6)",
                    "rgba(255, 206 , 86, 0.6)",
                  ],
                  borderColor: [
                    "rgba(255, 99 ,132, 1)",
                    "rgba(54, 162 , 235, 1)",
                    "rgba(255, 206 , 86, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { position: "left" },
                title: {
                  display: true,
                  text: "객실 등급별 생존 비율",
                  font: { size: 18, color: "#000" },
                },
              },
            }}
          />
        )}
      </div>
      <div className="container">
        {survived && (
          <Pie
            data={{
              labels: ["1등급", "2등급", "3등급"],
              datasets: [
                {
                  label: "명",
                  data: dead,
                  backgroundColor: [
                    "rgba(255, 99 ,132, 0.6)",
                    "rgba(54, 162 , 235, 0.6)",
                    "rgba(255, 206 , 86, 0.6)",
                  ],
                  borderColor: [
                    "rgba(255, 99 ,132, 1)",
                    "rgba(54, 162 , 235, 1)",
                    "rgba(255, 206 , 86, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { position: "left" },
                title: {
                  display: true,
                  text: "객실 등급별 사망 비율",
                  font: { size: 18, color: "#000" },
                },
              },
            }}
          />
        )}
      </div>
    </Graph5Container>
  );
});

export default Graph5;
