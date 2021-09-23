import "./style.css";
import { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const showMenu = () => setMenu(!menu);

  return (
    <>
      <div className="menu-icon" onClick={showMenu}>
        {menu ? (
          <img width="14" src="/images/times-solid.svg" alt="" />
        ) : (
          <img width="14" src="/images/bars-solid.svg" alt="" />
        )}
      </div>

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
            <Link to="/overview">overview</Link>
            <Link to="/features">features</Link>
            <Link to="/tech">technology</Link>
            <Link to="/contact">contact</Link>
            <Link to="/signUp">sign up</Link>
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
        <img
          onClick={showMenu}
          src="/images/times-solid.svg"
          alt=""
          className="menu-icon"
        />
      </div>
    </>
  );
}

export default Navbar;
