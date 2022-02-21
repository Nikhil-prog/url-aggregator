import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Viewpage from "./components/Viewpage";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/:username' element={<Viewpage />} />
        <Route path='/:username/:dashboard' element={<Dashboard />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router >
  );
}

export default App;
