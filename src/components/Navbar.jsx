import React from "react";
import InputSearch from "../common/inputSearch";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ handleInputSearch, editSearchItem, searchItem }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">
          <b>VIDLY</b>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mr-auto">
            <NavLink className="nav-link nav-item" to="/">
              All Movies
            </NavLink>

            <NavLink className="nav-link nav-item" to="/about">
              About
            </NavLink>

            <NavLink className="nav-link nav-item" to="/favourite">
              Favourite
            </NavLink>
            <NavLink className="nav-link nav-item" to="/login">
              Login
            </NavLink>
          </div>
        </div>
        <InputSearch
          handleInputSearch={handleInputSearch}
          editSearchItem={editSearchItem}
          searchItem={searchItem}
        />
      </nav>
    </>
  );
};

export default Navbar;
