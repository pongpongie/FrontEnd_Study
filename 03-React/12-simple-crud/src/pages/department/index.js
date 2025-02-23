import React, { memo, useCallback, useEffect, useState } from "react";

import styled from "styled-components";

import Spinner from "../../components/Spinner";
import Table from "../../components/Table";
import axiosHelper from "../../helpers/AxiosHelper";
import utilHelper from "../../helpers/UtilHelper";

import { useNavigate, useLocation } from "react-router-dom";

const DepartmentContainer = styled.div`
  .form-container {
    padding: 10px 0;
    margin: 0;

    input,
    button {
      margin-right: 15px;
      font-size: 16px;
      padding: 5px 10px;
    }
  }
`;

const Department = memo(() => {
  const [department, setDepartment] = useState([]);

  const [loading, setLoading] = useState(false);

  // const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const { search } = useLocation();
  const { keyword } = utilHelper.getQuery(search);

  useEffect(() => {
    (async () => {
      setLoading(true);

      let data = null;

      const args = {};

      if (keyword) {
        args["dname_like"] = keyword;
      }

      try {
        data = await axiosHelper.get("/department", args);
      } catch (e) {
        console.error(e);
        alert(e.message);
        return;
      } finally {
        setLoading(false);
      }

      setDepartment(data.item);
    })();
  }, [keyword]);

  const onSearchSubmit = useCallback((e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const word = form.keyword.value;
    console.log(`검색어 : ${word}`);

    // setKeyword(word);
    navigate(`/department?keyword=${word}`);
  }, []);

  return (
    <DepartmentContainer>
      <h2>Department</h2>
      <Spinner loading={loading} />

      <form className="form-container" onSubmit={onSearchSubmit}>
        <input type="text" name="keyword" defaultValue={keyword} />
        <button type="submit">검색</button>
      </form>
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
                {/* {keyword ? (
                  <td
                    dangerouslySetInnerHTML={{
                      __html: v.dname.replaceAll(
                        keyword,
                        `<mark>${keyword}</mark>`
                      ),
                    }}
                  ></td>
                ) : ( */}
                <td>{v.dname}</td>
                {/* )} */}

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
