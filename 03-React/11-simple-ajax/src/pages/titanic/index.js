import React, { memo, useCallback, useEffect, useState } from "react";

import styled from "styled-components";
import axiosHelper from "../../helpers/AxiosHelper";

import Table from "../../components/Table";
import Spinner from "../../components/Spinner";
import { SexLabel, EmbarkedLabel, SurvivedLabel } from "./Labels";

const TitanicContainer = styled.div`
  .dropdown-container {
    padding: 10px 0;
    margin: 0;

    select {
      margin-right: 15px;
      font-size: 16px;
      padding: 5px 10px;
    }
  }
`;

const Titanic = memo(() => {
  const [titanicData, setTitanicData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [sex, setSex] = useState("");
  const [embarked, setEmbarked] = useState("");
  const [survived, setSurvived] = useState("");

  useEffect(() => {
    console.log(`성별 : ${sex}, 탑승지: ${embarked}, 생존여부: ${survived}`);

    const args = {};

    if (sex) {
      args["sex"] = sex;
    }

    if (embarked) {
      args["embarked"] = embarked;
    }

    if (survived) {
      args["survived"] = survived == "true";
    }

    console.group("벡엔드에 전달할 파라미터");
    console.log(args);
    console.groupEnd();

    (async () => {
      let data = null;

      setLoading(true);

      try {
        data = await axiosHelper.get("/titanic", args);
        console.log(data);
      } catch (e) {
        alert(e.message);
        return;
      }

      setTitanicData(data.item);
      setLoading(false);
    })();
  }, [sex, embarked, survived]);

  const onSexSelectChange = useCallback((e) => {
    e.preventDefault();

    const choice = e.currentTarget.value;
    console.log(`선택된 값: ${choice}`);

    setSex(e.currentTarget.value);
  }, []);

  const onEmbarkedSelectChange = useCallback(
    (e) => setEmbarked(e.currentTarget.value),
    []
  );

  const onSurvivedSelectChange = useCallback(
    (e) => setSurvived(e.currentTarget.value),
    []
  );

  return (
    <TitanicContainer>
      <h2>Titanic</h2>

      <Spinner loading={loading} />

      <div className="dropdown-container">
        <select name="sex" onChange={onSexSelectChange}>
          <option value="">--성별 선택--</option>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select>

        <select name="embarked" onChange={onEmbarkedSelectChange}>
          <option value="">--탑승지 선택--</option>
          <option value="C">셰르부르</option>
          <option value="Q">퀸즈타운</option>
          <option value="S">사우샘프턴</option>
        </select>

        <select name="survived" onChange={onSurvivedSelectChange}>
          <option value="">--생존여부 선택--</option>
          <option value="true">생존</option>
          <option value="false">사망</option>
        </select>
      </div>

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
                <td>{<SexLabel $sex={v.sex} />}</td>
                <td>{v.age}</td>
                <td>{v.sibsp + v.parch}</td>
                <td>{v.pclass}등급</td>
                <td>{v.cabin}</td>
                <td>{v.ticket}</td>
                <td>{v.fare}</td>
                <td>{<EmbarkedLabel $embarked={v.embarked} />}</td>
                <td>{<SurvivedLabel $survived={v.survived} />}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TitanicContainer>
  );
});

export default Titanic;
