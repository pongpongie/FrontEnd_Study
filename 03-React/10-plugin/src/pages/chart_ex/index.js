import React, { memo } from "react";

import styled from "styled-components";
import {
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Filler,
} from "chart.js";

import { Bar, Line, Scatter, Pie, Radar } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Filler
);

const ChartExContainer = styled.div`
  .chart-wrapper {
    display: flex;
    flex-wrap: wrap;

    .chart-item {
      width: 33.3%;
      padding: 20px;
      box-sizing: border-box;
      height: 400px;
    }
  }
`;

const ChartEx = memo(() => {
  return (
    <ChartExContainer>
      <h2>ChartEx</h2>

      <div className="chart-wrapper">
        <div className="chart-item">
          <h3>세로 막대 그래프</h3>
          <Bar
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
            }}
            data={{
              labels: ["철수", "영희", "민수", "수연", "호영"],
              datasets: [
                {
                  label: "국어",
                  data: [98, 88, 92, 63, 100],
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  borderColor: "rgba(255, 99, 132, 0.5)",
                  borderWidth: 1,
                },
                {
                  label: "영어",
                  data: [82, 90, 70, 60, 50],
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                  borderColor: "rgba(53, 162, 235, 1)",
                  borderWidth: 1,
                },
                {
                  label: "수학",
                  data: [88, 62, 71, 31, 84],
                  backgroundColor: "rgba(258,234,153,0.5)",
                  borderColor: "rgba(258,234,153,1)",
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
        <div className="chart-item">
          <h3>가로 막대 그래프</h3>
          <Bar
            options={{
              responsive: true,
              maintainAspectRatio: true,
              indexAxis: "y",
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
            }}
            data={{
              labels: ["철수", "영희", "민수", "수연", "호영"],
              datasets: [
                {
                  label: "국어",
                  data: [98, 88, 92, 63, 100],
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  borderColor: "rgba(255, 99, 132, 0.5)",
                  borderWidth: 1,
                },
                {
                  label: "영어",
                  data: [82, 90, 70, 60, 50],
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                  borderColor: "rgba(53, 162, 235, 1)",
                  borderWidth: 1,
                },
                {
                  label: "수학",
                  data: [88, 62, 71, 31, 84],
                  backgroundColor: "rgba(258,234,153,0.5)",
                  borderColor: "rgba(258,234,153,1)",
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>

        <div className="chart-item">
          <h3>선 그래프</h3>
          <Line
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
            }}
            data={{
              labels: ["철수", "영희", "민수", "수연", "호영"],
              datasets: [
                {
                  label: "국어",
                  data: [98, 88, 92, 63, 100],
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  borderColor: "rgba(255, 99, 132, 0.5)",
                  borderWidth: 1,
                },
                {
                  label: "영어",
                  data: [82, 90, 70, 60, 50],
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                  borderColor: "rgba(53, 162, 235, 1)",
                  borderWidth: 1,
                },
                {
                  label: "수학",
                  data: [88, 62, 71, 31, 84],
                  backgroundColor: "rgba(258,234,153,0.5)",
                  borderColor: "rgba(258,234,153,1)",
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
        <div className="chart-item">
          <h3>산점도 그래프</h3>
          <Scatter
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
            }}
            data={{
              labels: [28, 29, 30, 31, 32, 33, 34, 35],
              datasets: [
                {
                  label: "국어",
                  data: [300, 321, 335, 400, 381, 480, 560, 545],
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  borderColor: "rgba(255, 99, 132, 0.5)",
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>

        <div className="chart-item">
          <h3>파이 그래프</h3>
          <Pie
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
            }}
            data={{
              labels: ["컴활", "퍼블", "프엔", "백엔", "DB"],
              datasets: [
                {
                  label: "국어",
                  data: [72, 95, 94, 77, 82],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(53, 162, 235, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(53, 162, 235, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>

        <div className="chart-item">
          <h3>레이더 그래프</h3>
          <Radar
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
            }}
            data={{
              labels: ["컴활", "퍼블", "프엔", "백엔", "DB"],
              datasets: [
                {
                  label: "국어",
                  data: [72, 95, 94, 77, 82],
                  backgroundColor: ["rgba(75, 192, 192, 0.2)"],
                  borderColor: ["rgba(75, 192, 192, 1)"],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
      </div>
    </ChartExContainer>
  );
});

export default ChartEx;
