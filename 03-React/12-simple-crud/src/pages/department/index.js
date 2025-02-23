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

  const [updateId, setUpdateId] = useState(-1);

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

  const onDataEditSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const current = e.currentTarget;

      try {
        regexHelper.value(
          "#edit-form input[name='dname']",
          "학과명을 입력하세요"
        );

        regexHelper.maxLength(
          "#edit-form input[name='dname']",
          20,
          "학과명은 20자 이내로 입력하세요"
        );
        regexHelper.value("#edit-form input[name='loc']", "위치를 입력하세요");
        regexHelper.maxLength(
          "#edit-form input[name='loc']",
          20,
          "위치는 20자 이내로 검색하세요"
        );
      } catch (error) {
        alert(error.message);
        error.element.focus();
        return;
      }

      const id = parseInt(current.id.value);
      const dname = current.dname.value;
      const loc = current.loc.value;
      console.log(`수정할 데이터: ${id}, ${dname}, ${loc}`);

      (async () => {
        setLoading(true);
        let data = null;

        try {
          data = await axiosHelper.put(`/department/${id}`, {
            dname: dname,
            loc: loc,
          });

          console.group("데이터 수정 결과");
          console.log(data);
          console.groupEnd();
        } catch (error) {
          console.error(error);
          alert(error.message);
          return;
        } finally {
          setLoading(false);
        }

        const editId = department.findIndex((v, i) => {
          v.id === id;
        });
        console.log("수정된 항목의 인덱스 : " + editId);
        const newData = [...department];
        newData.splice(editId, 1, data.item);
        console.log(newData);
        setDepartment(newData);

        setUpdateId(-1);
      })();
    },
    [department]
  );

  const onDataEditClick = useCallback(
    (e) => setUpdateId(parseInt(e.currentTarget.dataset.id)),
    []
  );

  const onDataDeleteClick = useCallback((e) => {
    e.preventDefault();

    const button = e.currentTarget;
    const id = parseInt(button.dataset.id);
    const dname = button.dataset.dname;

    console.log(`삭제 대상: ${id}, ${dname}`);

    if (!confirm(`정말 ${dname}을 삭제하시겠습니까?`)) {
      return;
    }

    (async () => {
      setLoading(true);
      try {
        await axiosHelper.delete(`/department/${id}`);
      } catch (error) {
        console.error(e);
        alert(e.message);
        return;
      } finally {
        setLoading(false);
      }

      const newData = department.filter((v, i) => v.id !== id);
      setDepartment(newData);
    })();
  });

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

      <form onSubmit={onDataEditSubmit} id="edit-form">
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
              if (updateId === v.id) {
                return (
                  <tr key={`edit-${v.id}`}>
                    <td>
                      <input type="hidden" name="id" defaultValue={v.id} />
                      {v.id}
                    </td>
                    <td>
                      <input type="text" name="dname" defaultValue={v.dname} />
                    </td>
                    <td>
                      <input type="text" name="loc" defaultValue={v.loc} />
                    </td>
                    <td colSpan="2">
                      <button type="submit">수정</button>
                    </td>
                  </tr>
                );
              }
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
                  <td>
                    <button
                      type="button"
                      data-id={v.id}
                      onClick={onDataEditClick}
                    >
                      수정
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      data-id={v.id}
                      data-dname={v.dname}
                      onClick={onDataDeleteClick}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </form>
    </DepartmentContainer>
  );
});

export default Department;
