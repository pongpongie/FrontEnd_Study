import { React } from "react";

import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Main from "./pages/main";
import Error404 from "./pages/error";
import DepartmenetGet from "./pages/department_get";
import DepartmentPath from "./pages/department_path";

function App() {
  return (
    <div>
      <h1> 02-simple-spa </h1>
      <nav>
        <Link to="/">[Home]</Link>
        <Link to="/about">[About]</Link>
        <Link to="/main">[Main]</Link>
        {/* HTTP GET 파라미터를 포함하는 링크 구성 */}
        <Link to="/department_get?id=101&msg=hello">[컴퓨터공학과]</Link>
        <Link to="/department_get?id=102&msg=world">[멀티미디어학과]</Link>
        <Link to="/department_path/201/헬로">[전자공학과]</Link>
        <Link to="/department_path/202/월드">[기계공학과]</Link>
      </nav>

      <a href="/about">일반 링크</a>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/main/*" element={<Main />} />

        <Route path="/department_get" element={<DepartmenetGet />} />
        <Route path="/department_path/:id/:msg" element={<DepartmentPath />} />
        {/* 지정되지 않은 모든 요청에 반응하지만, 블록의 맨 마지막에 배치해야함 */}
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
