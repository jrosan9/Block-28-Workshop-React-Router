import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div id="navbar">
        <Link className={"linkText"} to="/blue">
          Blue
        </Link>
        <Link className={"linkText"} to="/red">
          Red
        </Link>
        <Link className={"linkText"} to="/home">
          Home
        </Link>
      </div>
    </>
  );
}
