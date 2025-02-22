import React, { memo, useEffect, useState } from "react";

import styled from "styled-components";
import axiosHelper from "../../helpers/AxiosHelper";

const TitanicContainer = styled.div``;

import Table from "../../components/Table";
import Spinner from "../../components/Spinner";
import { SexLabel, EmbarkedLabel, SurvivedLabel } from "./Labels";

const Titanic = memo(() => {
  const [titanicData, setTitanicData] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      let data = null;

      setLoading(true);

      try {
        data = await axiosHelper.get("/titanic");
        console.log(data);
      } catch (e) {
        alert(e.message);
        return;
      }

      setTitanicData(data.item);
      setLoading(false);
    })();
  }, []);

  return (
    <TitanicContainer>
      <h2>Titanic</h2>

      <Table>
        <thead>
          <tr>
            <th>승객번호</th>
            <th>승객이름</th>
            <th>성별</th>
            <th>나이</th>
            <th>동승자 수</th>
            <th>객실 등급</th>
            <th>방 호수</th>
            <th>티켓 번호</th>
            <th>요금</th>
            <th>탑승지</th>
            <th>생존여부</th>
          </tr>
        </thead>
        <tbody>
          {titanicData.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{<SexLabel sex={v.sex} />}</td>
                <td>{v.age}</td>
                <td>{v.sibsp + v.parch}</td>
                <td>{v.pclass}등급</td>
                <td>{v.cabin}</td>
                <td>{v.ticket}</td>
                <td>{<EmbarkedLabel embarked={v.embarked} />}</td>
                <td>{<SurvivedLabel survived={v.survived} />}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TitanicContainer>
  );
});

export default Titanic;
