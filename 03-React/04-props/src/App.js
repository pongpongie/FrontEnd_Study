import { React } from "react";

import { Link, Route, Routes } from "react-router-dom";

import MyProps from "./pages/my_props";
import MyChildren from "./pages/my_children/MyChildren";

function App() {
  return (
    <div>
      <h1>04-props</h1>

      <nav>
        <Link to="/myprops">[MyProps]</Link>
        <Link to="/mychildren">[MyChildren]</Link>
      </nav>

      <Routes>
        <Route path="/myprops" element={<MyProps />} />
        <Route path="/mychildren" element={<MyChildren />} />
      </Routes>
    </div>
  );
}

export default App;
