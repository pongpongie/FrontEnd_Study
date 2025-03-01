import React, { memo, useEffect } from "react";

import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../slices/TitanicSlice";

import Spinner from "../../components/Spinner";
import GraphBoard from "./GraphBoard";
import ScoreBoard from "./ScoreBoard";

const DashboardContainer = styled.div`
  .error-info {
    border: 2px solid #f06;
    padding: 10px 30px;
    background-color: #fee;

    h1 {
      color: #f06;
      margin-top: 0;
      margin-bottom: 10px;
    }

    p {
      color: #f06;
      margin: 0;
      margin-bottom: 10px;
    }
  }
`;

const Dashboard = memo(() => {
  const { loading, status, message, item } = useSelector(
    (state) => state.TitanicSlice
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, []);

  return (
    <DashboardContainer>
      <Spinner loading={loading} />
      <h2>Dashboard</h2>

      {status !== 200 && (
        <div className="error-info">
          <h1>{status}</h1>
          <p>{message}</p>
        </div>
      )}

      <ScoreBoard />

      <GraphBoard />
      {/* {item && <p>{JSON.stringify(item)}</p>} */}
    </DashboardContainer>
  );
});

export default Dashboard;
