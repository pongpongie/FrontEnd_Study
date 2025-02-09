import React, { memo, useEffect, useState } from "react";

import styled from "styled-components";

import sample from "../../assets/img/sample.jpg";

const MyEffectContainer = styled.div`
  /* background-color: #ff000055; */
`;

const MyEffect = memo(() => {
  const [myBrightness, setMyBrightness] = useState(100);

  const [myWidth, setMyWidth] = useState(window.innerWidth);

  const onMyResize = (e) => {
    console.log(`창 사이즈 변경됨 >> ${window.innerWidth}`);
    setMyWidth(window.innerWidth);
  };

  // CASE 1
  // useEffect(() => {
  //   console.debug(
  //     "case 1 :: 화면에 컴포넌트가 처음 로드되거나 state, props 중 하나라고 변경될 경우",
  //     new Date()
  //   );
  // });

  // CASE 2
  useEffect(
    () => console.warn("case 2 :: myBrightness 값이 변경됨", new Date()),
    [myBrightness]
  );

  // CASE 3, 4
  useEffect(() => {
    console.error("case 3:: 화면의 컴포넌트가 첨음 로드 될 때", new Date());
    window.addEventListener("resize", onMyResize);

    return () => {
      console.log(
        "case 4:: 컴포넌트가 화면에서 사라지기 직전에 처리되어야 할 기능"
      );
      window.removeEventListener("resize", onMyResize);
    };
  }, []);

  return (
    <MyEffectContainer>
      <h2>MyEffect</h2>
      <img
        src={sample}
        width={myWidth * 0.3}
        style={{ filter: "brightness(" + myBrightness + "%)" }}
      />
      <div>
        <input
          type="range"
          min={0}
          max={200}
          step={1}
          value={myBrightness}
          onChange={(e) => {
            setMyBrightness(e.currentTarget.value);
          }}
        />
      </div>
    </MyEffectContainer>
  );
});

export default MyEffect;
