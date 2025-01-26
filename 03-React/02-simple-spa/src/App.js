import { React } from "react";

import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Main from "./pages/main";
import Error404 from "./pages/error";

function App() {
  return (
    <div>
      <h1> 02-simple-spa </h1>
      <nav>
        <Link to="/">[Home]</Link>
        <Link to="/about">[About]</Link>
        <Link to="/main">[Main]</Link>
      </nav>

      <a href="/about">일반 링크</a>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/main/*" element={<Main />} />
        {/* 지정되지 않은 모든 요청에 반응하지만, 블록의 맨 마지막에 배치해야함 */}
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
