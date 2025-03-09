import React, { memo, useEffect, useCallback } from "react";

import styled from "styled-components";
import dayjs from "dayjs";

import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getList, deleteItem } from "../../slices/ProfessorSlice";

import Spinner from "../../components/Spinner";
import Table from "../../components/Table";
import ErrorView from "../../components/ErrorView";

import utilHelper from "../../helpers/UtilHelper";

const ProfessorListContainer = styled.div`
  .search-container {
    padding: 10px 0;
    margin: 0;
    margin-bottom: 10px;

    input,
    button {
      margin-right: 15px;
      font-size: 16px;
      padding: 5px 10px;
    }
  }

  tr {
    &:nth-child(even) {
      background-color: #f6f6f6;
    }
    &:hover {
      background-color: #e5e5e5;
    }
  }

  .action-link {
    display: inline-block;
    margin: 0 5px;
    color: #06f;
    text-decoration: none;
    border: 1px solid #ccc;
    padding: 2px 5px;
    font-size: 12px;

    &:hover {
      background-color: #f6f6f6;
      color: #f06;
    }

    &:active {
      background-color: #f06;
      color: #fff;
    }
  }
`;

const ProfessorList = memo(() => {
  const { loading, status, message, item } = useSelector(
    (state) => state.ProfessorSlice
  );

  const navigate = useNavigate();
  const { search } = useLocation();
  const { keyword } = utilHelper.getQuery(search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList({ keyword }));
  }, [keyword]);

  const onSearchSubmit = useCallback((e) => {
    e.preventDefault();

    navigate(`/?keyword=${e.currentTarget.keyword.value}`);
  }, []);

  const onDeleteClick = useCallback(() => {
    e.preventDefault();

    const current = e.currentTarget;
    const id = current.dataset.id;
    const name = current.dataset.name;

    if (!confirm(`정말${name}님의 데이터를 삭제하시겠습니까?`)) {
      return;
    }
    try {
      dispatch(deleteItem({ id }));
      dispatch(getList({ keyword }));
    } catch (error) {
      return;
    }
  }, []);

  return (
    <ProfessorListContainer>
      <Spinner loading={loading} />
      <ErrorView status={status} message={message} />

      <form className="search-container" onSubmit={onSearchSubmit}>
        <input
          type="search"
          name="keyword"
          placeholder="교수이름 검색..."
          defaultValue={keyword}
        />
        <button type="submit">검색</button>
        <Link to="/add">교수 추가</Link>
      </form>

      <Table>
        <thead>
          <tr>
            <th>교수번호</th>
            <th>이름</th>
            <th>아이디</th>
            <th>직급</th>
            <th>급여</th>
            <th>입사일</th>
            <th>보직수당</th>
            <th>소속학과번호</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(item) &&
            item.map((v, i) => {
              return (
                <tr key={i}>
                  <td>{v.id}</td>
                  <td>
                    {!keyword ? (
                      <Link to={`/view/${v.id}`}>{v.name} </Link>
                    ) : (
                      <Link
                        to={`/view/${v.id}`}
                        dangerouslySetInnerHTML={{
                          __html: v.name.replaceAll(
                            keyword,
                            `<mark>${keyword}</mark>`
                          ),
                        }}
                      />
                    )}
                  </td>
                  <td>{v.userid}</td>
                  <td>{v.position}</td>
                  <td>{v.sal?.toLocaleString()}</td>
                  <td>{dayjs(v.hiredate).format("YYYY-MM-DD")}</td>
                  <td>{v.comm?.toLocaleString()}</td>
                  <td>{v.deptno}</td>
                  <td>
                    <Link to={`/edit/${v.id}`} className="action-link">
                      수정
                    </Link>
                    <a
                      href="#"
                      data-id={v.id}
                      data-name={v.name}
                      className="action-link"
                      onClick={onDeleteClick}
                    >
                      삭제
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </ProfessorListContainer>
  );
});

export default ProfessorList;
