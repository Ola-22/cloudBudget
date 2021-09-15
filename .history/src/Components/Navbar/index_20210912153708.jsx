import "./style.scss";
// import {Link} from "react-router-dom"
import { Link, BrowserRouter as Router } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-main">
      <div className="nav-box">
        <img src="/Vector.png" alt="" />
        <h3>CLOUDBUDGET</h3>
      </div>
      <Router>
        <nav>
          <Link to="/">overview</Link>
          <Link to="/">features</Link>
          <Link to="/">technology</Link>
          <Link to="/">contact</Link>
          <Link to="/">sign up</Link>
        </nav>
      </Router>
      <div style={{ display: "flex" }}>
        <button style={{ display: "flex", alignItems: "center" }}>
          <img src="/flag.png" alt="" />
          <h4>EN</h4>
        </button>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
