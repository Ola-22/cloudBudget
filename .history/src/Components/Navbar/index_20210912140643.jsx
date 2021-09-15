import "./style.css";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="nav-main">
      <div>
        <img src="/Vector.png" alt="" />
        <h2>CLOUDBUDGET</h2>
      </div>
      <nav>
        <a href="#">overview</a>
        <a href="#">features</a>
        <a href="#">technology</a>
        <a href="#">contact</a>
        <a href="#">sign up</a>
      </nav>
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
