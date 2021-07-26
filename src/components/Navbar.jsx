import React from "react";
import "../Style/navbar.css";

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        <i className="fa" style={{fontSize:'24px'}}>&#xf07a;</i>
        <span className="badge badge-warning" id="lblCartCount"> {totalCounters} </span>
          Cart
      </div>
    </nav>
  );
};

export default NavBar;
