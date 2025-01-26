import React from "react";
import { useParams } from "react-router-dom";

const DepartmentPath = () => {
  const params = useParams();
  console.debug(params);

  const departmentList = {
    item: [
      { id: 201, dname: "전자공학과", loc: "3호관" },
      { id: 202, dname: "기계공학과", loc: "4호관" },
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

export default DepartmentPath;
