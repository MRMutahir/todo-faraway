import "./Navbar.css";

function Navbar() {
  return (
    <div className="main-Navbar">
      <div className="navbar-wrapper">
        <div className="nav-top">
          {" "}
          <h1 className="bg-logo">Far Away</h1>
        </div>
        <div className="nav-buttom">
          <p>What do you need for your Trip</p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input type="text" />
          <button>ADD</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
