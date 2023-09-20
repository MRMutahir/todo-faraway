import "./Center.css";

function Center() {
  return (
    <div className="center-main">
      <div className="center-wrapper">
        {" "}
        <div className="center-top">
          {" "}
          <ul className="c-t-list">

          </ul>
        </div>
        <div className="center-buttom">
          {" "}
          <select>
            <option>Sort By input order</option>
            <option>Sort By Description</option>
            <option>Sort By Packed Status</option>
          </select>
          <button className="btnAll"> Clear </button>
        </div>
      </div>
    </div>
  );
}

export default Center;
