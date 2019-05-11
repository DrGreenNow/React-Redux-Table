import React from "react";
import "./NavBar.css";
import Input from "../Input/Input";

const NavBar = () => {
  return (
    <div className="wrapperNavBar">
      <nav className="navbar navbar-light justify-content-between navtop">
        <span className="navbar-brand mb-0 h1">Companies</span>
        <div className="float-right">
          <Input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search for company"
            aria-label="Search"
          />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
