/**
 * 리액트의 전체 페이지를 구성하는 컴포넌트
 */
/** 리액트 기본 패키지 참조 (모든 파일에서 무조건 참조한다.) */
import React, { memo } from "react";
/** 링크와 페이지 구성에 필요한 컴포넌트 참조 */
import { Routes, Route } from "react-router-dom";
import MenuLink from "./components/MenuLink";
/** SEO 설정 */
import Meta from "./components/Meta";
/** 전역 SCSS 적용을 위한 reset.css와 StyledComponent */
import { Reset } from "styled-reset";
import GlobalStyles from "./components/GlobalStyles";

import MyState from "./pages/my_state/index";
import DateRange1 from "./pages/date_range1/index";
import DateRange2 from "./pages/date_range2/index";
import MyReducer from "./pages/my_reducer/index";
import MyEffect from "./pages/my_effect/index";
import MyRef from "./pages/my_ref/index";
import MyMemo from "./pages/my_memo/index";
import MyWidth from "./pages/my_width/index";
import MyCallback from "./pages/my_callback/index";

const App = memo(() => {
  return (
    <>
      <Meta />
      {/* <Reset /> */}
      <GlobalStyles />
      <h1>08-hook-event</h1>
      <hr />

      {/* ---- 링크 구성 부분 --- */}
      <nav>
        <MenuLink to="/my_state">MyState</MenuLink>
        <MenuLink to="/date_range1">DateRange1</MenuLink>

        <MenuLink to="/my_effect">MyEffect</MenuLink>

        <MenuLink to="/my_memo">MyMemo</MenuLink>

        <MenuLink to="/my_reducer">MyReducer</MenuLink>
        <MenuLink to="/date_range2">DateRange2</MenuLink>

        <MenuLink to="/my_ref">MyRef</MenuLink>

        <MenuLink to="/my_callback">MyCallback</MenuLink>

        <MenuLink to="/my_width">MyWidth</MenuLink>
      </nav>

      {/* ---- 페이지 역할을 할 컴포넌트를 명시하기 --- */}
      <Routes>
        <Route path="/my_state" element={<MyState />}></Route>
        <Route path="/date_range1" element={<DateRange1 />}></Route>

        <Route path="/my_effect" element={<MyEffect />}></Route>
        <Route path="/my_memo" element={<MyMemo />}></Route>

        <Route path="/my_reducer" element={<MyReducer />}></Route>
        <Route path="/date_range2" element={<DateRange2 />}></Route>

        <Route path="/my_ref" element={<MyRef />}></Route>

        <Route path="/my_callback" element={<MyCallback />}></Route>

        <Route path="/my_width" element={<MyWidth />}></Route>
      </Routes>
    </>
  );
});

export default App;
