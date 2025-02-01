import React from "react";

import styled, { css } from "styled-components";

const MyGridContainer = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 1024px;
  border: 5px solid #cc0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MyGridItem = styled.li`
  width: ${(props) => props.width};
`;

const MyBox = styled.div`
  border: 3px dotted #000;
  background-color: #eee;
  height: 100px;
  text-align: center;
  font-size: 20px;
  line-height: 100px;
  cursor: pointer;
  transition: all 0.1s ease-in;

  color: ${(props) => props.color};

  &:hover {
    transform: scale(1.05, 1.05) rotate(-10deg);
    background-color: "#eeeeee";
    color: #fff;
  }

  ${(props) => {
    props.number % 2 === 1 &&
      css`
        font-weight: bold;
        font-style: italic;
        text-decoration: underline;
      `;
  }}
`;

const StyledComponent = () => {
  const myColors = ["red", "green", "purple", "yellow", "pink"];

  const myWidth = 100 / myColors.length + "%";

  return (
    <div>
      <h2>StyledComponent</h2>
      <h3>단순 태그처럼 사용</h3>
      <MyGridContainer>
        {/* MyGirdItem에 width라는 이름의 변수 값 전달 */}
        <MyGridItem width={"30%"}>
          <MyBox>Item1</MyBox>
        </MyGridItem>
        <MyGridItem width={"15%"}>
          <MyBox>Item1</MyBox>
        </MyGridItem>
        <MyGridItem width={"20%"}>
          <MyBox>Item1</MyBox>
        </MyGridItem>
        <MyGridItem width={"15%"}>
          <MyBox>Item1</MyBox>
        </MyGridItem>
        <MyGridItem width={"25%"}>
          <MyBox>Item1</MyBox>
        </MyGridItem>
      </MyGridContainer>

      <h3>배열 원소를 활용한 컴포넌트 사용</h3>
      <MyGridContainer>
        {myColors.map((item, index) => {
          return (
            <MyGridItem key={index} width={myWidth}>
              <MyBox color={item} number={index}>
                {item}
              </MyBox>
            </MyGridItem>
          );
        })}
      </MyGridContainer>
    </div>
  );
};

export default StyledComponent;
