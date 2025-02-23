import React, { memo, useCallback, useEffect, useState } from "react";

import styled from "styled-components";

import Spinner from "../../components/Spinner";
import Table from "../../components/Table";
import axiosHelper from "../../helpers/AxiosHelper";
import utilHelper from "../../helpers/UtilHelper";

import regexHelper from "../../helpers/RegexHelper";

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

      const args = { _sort: "id", _order: "desc" };

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

  const onDataAddSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const form = e.currentTarget;

      try {
        regexHelper.value("#dname", "학과명을 입력하세요");
        regexHelper.maxLength("#dname", 20, "학과명은 20자 이내로 입력하세요");
        regexHelper.value("#loc", "위치를 입력하세요");
        regexHelper.maxLength("#loc", 20, "위치는 20자 이내로 검색하세요");
      } catch (e) {
        alert(e.message);
        e.element.focus();
        return;
      }

      const dname = form.dname.value;
      const loc = form.loc.value;

      (async () => {
        setLoading(true);
        let data = null;
        try {
          data = await axiosHelper.post("/department", {
            dname: dname,
            loc: loc,
          });

          console.group("데이터 저장 결과");
          console.log(data);
          console.groupEnd();
        } catch (e) {
          console.error(e);
          alert(e.message);
          return;
        } finally {
          setLoading(false);
        }

        const newData = [data.item, ...department];
        setDepartment(newData);
      })();
    },
    [department]
  );
  return (
    <DepartmentContainer>
      <h2>Department</h2>
      <Spinner loading={loading} />

      <form className="form-container" onSubmit={onDataAddSubmit}>
        <input
          type="text"
          name="dname"
          id="dname"
          placeholder="학과명을 입력하세요"
        />
        <input
          type="text"
          name="loc"
          id="loc"
          placeholder="위치를 입력하세요"
        />
        <button type="submit">저장하기</button>
      </form>

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
                {keyword ? (
                  <td
                    dangerouslySetInnerHTML={{
                      __html: v.dname.replaceAll(
                        keyword,
                        `<mark>${keyword}</mark>`
                      ),
                    }}
                  ></td>
                ) : (
                  <td>{v.dname}</td>
                )}

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
