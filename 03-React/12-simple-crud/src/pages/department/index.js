import React, { memo, useEffect, useState } from "react";

import styled from "styled-components";

import Spinner from "../../components/Spinner";
import Table from "../../components/Table";
import axiosHelper from "../../helpers/AxiosHelper";

const DepartmentContainer = styled.div``;

const Department = memo(() => {
  const [department, setDepartment] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      let data = null;

      try {
        data = await axiosHelper.get("/department");
      } catch (e) {
        console.error(e);
        alert(e.message);
        return;
      } finally {
        setLoading(false);
      }

      setDepartment(data.item);
    })();
  }, []);

  return (
    <DepartmentContainer>
      <h2>Department</h2>
      <Spinner loading={loading} />
      <Table>
        <thead>
          <tr>
            <th>학과번호</th>
            <th>학과명</th>
            <th>학과위치</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {department.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.dname}</td>
                <td>{v.loc}</td>
                <td>수정</td>
                <td>삭제</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </DepartmentContainer>
  );
});

export default Department;
