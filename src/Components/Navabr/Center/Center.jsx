import "./Center.css";

function Center() {
  return (
    <div className="center-main">
      <div className="center-wrapper">
        {" "}
        <div className="center-top">
          {" "}
          <ul>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
          </ul>
        </div>
        <div className="center-buttom">
          {" "}
          <select>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <button> Clear </button>
        </div>
      </div>
    </div>
  );
}

export default Center;
