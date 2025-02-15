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

/** 하위 페이지를 담당하는 컴포넌트(직접제작)들 참조 */
import ImageEx from "./pages/image_ex/index";
import StyleEx from "./pages/style_ex/index";
import TabEx from "./pages/tab_ex/index";
import TabEx2 from "./pages/tab_ex/index2";
import SubmenuEx from "./pages/submenu_ex/index";
import CollapseEx from "./pages/collapse_ex/index";
import CreateElementEx from "./pages/create_element_ex/index";

const App = memo(() => {
  return (
    <>
      <Meta />
      {/* <Reset /> */}
      <GlobalStyles />
      <h1>09-ui-demo</h1>
      <hr />

      {/* ---- 링크 구성 부분 --- */}
      <nav>
        <MenuLink to="/image_ex">ImageEx</MenuLink>
        <MenuLink to="/style_ex">StyleEx</MenuLink>
        <MenuLink to="/tab_ex">TabEx</MenuLink>
        <MenuLink to="/tab_ex2">TabEx2</MenuLink>
        <MenuLink to="/submenu_ex">SubmenuEx</MenuLink>
        <MenuLink to="/collapse_ex">CollapseEx</MenuLink>
        <MenuLink to="/create_element_ex">CreateElementEx</MenuLink>
      </nav>

      {/* ---- 페이지 역할을 할 컴포넌트를 명시하기 --- */}
      <Routes>
        <Route path="/image_ex" element={<ImageEx />}></Route>
        <Route path="/style_ex" element={<StyleEx />}></Route>
        <Route path="/tab_ex" element={<TabEx />}></Route>
        <Route path="/tab_ex2" element={<TabEx2 />}></Route>
        <Route path="/submenu_ex" element={<SubmenuEx />}></Route>
        <Route path="/collapse_ex" element={<CollapseEx />}></Route>
        <Route path="/create_element_ex" element={<CreateElementEx />}></Route>
      </Routes>
    </>
  );
});

export default App;
