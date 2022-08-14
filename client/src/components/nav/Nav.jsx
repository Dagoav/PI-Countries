import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import "./Nav.css";

const Nav = ({ searchBar }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/home"}>
          <span className="material-symbols-outlined earth-logo">public</span>
        </Link>
      </div>
      {searchBar ? <SearchBar /> : <div></div>}
      <div className="infoBox">
        <button className="btn-nav">Info</button>
        <Link to="/formActivity">
          <button className="btn-nav">Crear Actividad</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
