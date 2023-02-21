import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div
        style={{ padding: "10px", cursor: "pointer" }}
        onClick={props.setGeceModu}
      >
        <div className="dark-mode__toggle">
          <div
            className={props.geceModu === "on" ? "toggle toggled" : "toggle"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
