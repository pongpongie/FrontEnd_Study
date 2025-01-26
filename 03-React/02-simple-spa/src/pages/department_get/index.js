import React from "react";

import { useLocation } from "react-router-dom";

const DepartmenetGet = () => {
  const location = useLocation();

  console.group("useLocation()의 리턴값 확인");
  console.debug(location);
  console.groupEnd();

  const query = new URLSearchParams(location.search);
  const params = Object.fromEntries(query);
  console.group("파라미터 처리 결과 확인");
  console.debug(params);
  console.debug("요청된 학과번호 값=%s (%s)", params.id, typeof params.id);
  console.debug("요청된 메시지 내용=%s (%s)", params.msg, typeof params.msg);
  console.groupEnd();

  const departmentList = {
    item: [
      { id: 101, dname: "컴퓨터공학과", loc: "1호관" },
      { id: 102, dname: "멀티미디어학과", loc: "2호관" },
    ],
  };

  let departmentItem = departmentList.item.find((v, i) => v.id == params.id);

  if (!departmentItem) {
    return <h3>존재하지 않는 데이터에 대한 요청입니다.</h3>;
  }

  return (
    <div>
      <h1>DepartmentGet</h1>
      <h2>{departmentItem.dname}</h2>
      <ul>
        <li>학과번호 : {departmentItem.id}</li>
        <li>학과 위치 : {departmentItem.loc}</li>
      </ul>
    </div>
  );
};

export default DepartmenetGet;
