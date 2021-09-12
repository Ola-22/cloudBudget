import "style";

function Navbar() {
  return (
    <div className="nav-main">
      <div>
        <img src="/Vector.png" alt="" />
        <h2>CLOUDBUDGET</h2>
      </div>
      <div>
        <a href="#">overview</a>
        <a href="#">features</a>
        <a href="#">technology</a>
        <a href="#">contact</a>
        <a href="#">sign up</a>
      </div>
    </div>
  );
}

export default Navbar;
