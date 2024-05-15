import MainContainer from "./MainContainer";
import Navbar from "./NavBar";
import { Routes, Route, Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div>
        <Link to="/Navbar"></Link>
        <Link to="/MainContainer"></Link>
      </div>
      <Routes>
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/MainContainer" element={<MainContainer />} />
      </Routes>
    </>
  );
}
