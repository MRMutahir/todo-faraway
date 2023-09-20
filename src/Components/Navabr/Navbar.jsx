import "./Navbar.css";

function Navbar() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  return (
    <div className="main-Navbar">
      <div className="navbar-wrapper">
        <div className="nav-top">
          {" "}
          <h1 className="bg-logo">Far Away</h1>
        </div>
        <div className="nav-buttom">
          <span className="heading-name" >What do you need for your 😍 trip?</span >
          <select>
            {numbers.map((ele, index) => (
              <option key={index} value={ele}>{ele}</option>
            ))}
          </select>
          <input type="text" />
          <button className="btnAll">ADD</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
