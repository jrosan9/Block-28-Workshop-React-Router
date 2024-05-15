import { Routes, Route } from "react-router-dom";
import ReturnBlueText from "./Blue";
import ReturnRedText from "./Red";
import Home from "./Home";
export default function MainContainer() {
  return (
    <>
      <div id="main-section">
        {
          <Routes>
            <Route path="/blue" element={<ReturnBlueText />} />
            <Route path="/red" element={<ReturnRedText />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        }
      </div>
    </>
  );
}
