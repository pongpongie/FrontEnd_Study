import React, { memo, useEffect, useCallback, useMemo } from "react";

import styled from "styled-components";
import dayjs from "dayjs";

import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getItem, deleteItem } from "../../slices/ProfessorSlice";

import Spinner from "../../components/Spinner";
import Table from "../../components/Table";
import ErrorView from "../../components/ErrorView";

const ProfessorViewContainer = styled.div`
  .button-container {
    text-align: center;
    margin-top: 20px;
    a,
    button {
      display: inline-block;
      background-color: #fff;
      cursor: pointer;
      margin: 0 10px;
      color: #06f;
      text-decoration: none;
      border: 1px solid #ccc;
      padding: 5px 15px;
      font-size: 16px;

      &:hover {
        background-color: #f6f6f6;
        color: #f06;
      }

      &:active {
        background-color: #f06;
        color: #fff;
      }
    }
  }
`;

const ProfessorView = memo(() => {
  const { id } = useParams();
  const { loading, status, message, item } = useSelector(
    (state) => state.ProfessorSlice
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useMemo(() => {
    if (!id) {
      return null;
    }

    if (!item) {
      dispatch(getItem({ id }));
    }

    if (!Array.isArray(item)) {
      return { ...item };
    }

    return item.find((i) => i.id === parseInt(id));
  }, [item]);

  const onDeleteClick = useCallback((e) => {
    e.preventDefault();

    const current = e.currentTarget;
    const id = parseInt(current.dataset.id);
    const name = current.dataset.name;

    if (!window.confirm(`정말 ${name}님의 정보를 삭제하시겠습니까?`)) {
      return;
    }

    try {
      dispatch(deleteItem({ id }));
    } catch (error) {
      return;
    }

    alert("삭제되었습니다");
    navigate("/");
  }, []);

  return (
    <ProfessorViewContainer>
      <Spinner loading={loading} />
      <ErrorView status={status} message={message} />

      <Table>
        <colgroup>
          <col width="150" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>교수번호</th>
            <td className="left">{data?.id}</td>
          </tr>
          <tr>
            <th>이름</th>
            <td className="left">{data?.name}</td>
          </tr>
          <tr>
            <th>아이디</th>
            <td className="left">{data?.userid}</td>
          </tr>
          <tr>
            <th>직급</th>
            <td className="left">{data?.position}</td>
          </tr>
          <tr>
            <th>급여</th>
            <td className="left">{data?.sal}</td>
          </tr>
          <tr>
            <th>입사일</th>
            <td className="left">
              {dayjs(data?.hiredate).format("YYYY-MM-DD")}
            </td>
          </tr>
          <tr>
            <th>보직수당</th>
            <td className="left">{data?.comm}</td>
          </tr>
          <tr>
            <th>소속학과번호</th>
            <td className="left">{data?.deptno}</td>
          </tr>
        </tbody>
      </Table>
      <div className="button-container">
        <Link to="/">목록</Link>
        <Link to="/add">추가</Link>
        <Link to={`/edit/${id}`}>수정</Link>
        <button
          type="button"
          data-id={id}
          data-name={data?.name}
          onClick={onDeleteClick}
        >
          삭제
        </button>
      </div>
    </ProfessorViewContainer>
  );
});

export default ProfessorView;
