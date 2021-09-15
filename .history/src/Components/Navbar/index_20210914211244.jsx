import "./style.scss";
import { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const showMenu = () => setMenu(!menu);

  return (
    <>
      <img
        onClick={showMenu}
        width="14"
        className="menu-icon"
        src="/images/bars-solid.svg"
        alt=""
      />
      <div className="nav-main">
        <div className="nav-box">
          <img src="/images/Vector.png" alt="" />
          <h3>CLOUDBUDGET</h3>
        </div>

        <Router>
          <nav
            className={menu ? "nav-menu active" : "nav-menu"}
            onClick={showMenu}
          >
            <Link to="/">overview</Link>
            <Link to="/">features</Link>
            <Link to="/">technology</Link>
            <Link to="/">contact</Link>
            <Link to="/">sign up</Link>
          </nav>
        </Router>
        <div style={{ display: "flex", cursor: "pointer" }}>
          <div className="flag-box">
            <img src="/images/flag.png" alt="" />
            <h4>EN</h4>
            <img src="/images/vector2.png" alt="" />
          </div>
          <button>Login</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
