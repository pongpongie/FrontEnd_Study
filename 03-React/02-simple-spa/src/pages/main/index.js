import React from "react";

import { Link, Route, Routes } from "react-router-dom";

import MainSub1 from "./MainSub1";
import MainSub2 from "./MainSub2";

const Main = () => {
  return (
    <div>
      <h1>Main</h1>

      <nav>
        <Link to="/main/sub1">[MainSub1]</Link>
        <Link to="/main/sub2">[MainSub2]</Link>
      </nav>

      <Routes>
        <Route path="sub1" element={<MainSub1 />} />
        <Route path="sub2" element={<MainSub2 />} />
      </Routes>
    </div>
  );
};

export default Main;
