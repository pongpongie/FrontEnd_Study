import { React } from "react";

import { Link, Route, Routes } from "react-router-dom";

import Expr from "./pages/expr";
import If1 from "./pages/if1";
import If2 from "./pages/if2";
import If3 from "./pages/if3";
import If4 from "./pages/if4";
import Loop1 from "./pages/loop1";
import Loop2 from "./pages/loop2";
import Loop3 from "./pages/loop3";

function App() {
  return (
    <div>
      <h1>03-jsx</h1>

      <nav>
        <Link to="/expr">[Expr]</Link>
        <Link to="/if1">[if1]</Link>
        <Link to="/if2">[if2]</Link>
        <Link to="/if3">[if3]</Link>
        <Link to="/if4">[if4]</Link>
        <Link to="/loop1">[loop1]</Link>
        <Link to="/loop2">[loop2]</Link>
        <Link to="/loop3">[loop3]</Link>
      </nav>

      <Routes>
        <Route path="/expr" element={<Expr />} />
        <Route path="/if1" element={<If1 />} />
        <Route path="/if2" element={<If2 />} />
        <Route path="/if3" element={<If3 />} />
        <Route path="/if4" element={<If4 />} />
        <Route path="/loop1" element={<Loop1 />} />
        <Route path="/loop2" element={<Loop2 />} />
        <Route path="/loop3" element={<Loop3 />} />
      </Routes>
    </div>
  );
}

export default App;
