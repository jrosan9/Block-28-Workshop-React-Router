// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/NavBar";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <>
      <div id="container">
        <Navbar />
        <MainContainer />
      </div>
    </>
  );
}

export default App;
