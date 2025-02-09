import React, { memo, useEffect, useMemo, useState } from "react";

import styled from "styled-components";

const MyMemoContainer = styled.div``;

const MyMemo = memo(() => {
  const [myNumber, setMyNumber] = useState(0);

  const onMyNumberChange = (e) => {
    const inputValue = e.currentTarget.value;
    const inputNumber = isNaN(inputValue) ? 0 : parseInt(inputValue);
    setMyNumber(inputNumber);
  };

  // CASE 1 - useState + useEffect
  // const [myResult, setMyResult] = useState(0);

  // useEffect(() => {
  //   setMyResult(myNumber * 234);
  // }, [myNumber]);

  // CASE 2 - useMemo

  const myResult = useMemo(() => {
    return myNumber * 234;
  }, [myNumber]);

  return (
    <MyMemoContainer>
      <h2>MyMemo</h2>
      <input type="number" value={myNumber} onChange={onMyNumberChange} /> x 234
      = {myResult}
    </MyMemoContainer>
  );
});

export default MyMemo;
