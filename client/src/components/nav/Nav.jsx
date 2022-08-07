import React, { useState } from "react";
import "./Nav.css";

const Nav = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(() => e.target.value);
  };

  const clearText = () => {
    console.log(inputValue);
    setInputValue(() => "");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <span className="material-symbols-outlined earth-logo">public</span>
      </div>
      <div className="search">
        <input
          placeholder="Buscar un país..."
          type="text"
          id="inputSearch"
          onChange={handleChange}
          value={inputValue}
        />
        {inputValue !== "" && (
          <span
            className="material-symbols-outlined icon-close"
            onClick={clearText}
          >
            close
          </span>
        )}
        <div className="boxIcon">
          <span className="material-symbols-outlined icon-search">search</span>
        </div>
      </div>
      <div className="infoBox">
        <button className="btn-nav">Info</button>
        <button className="btn-nav">Crear Actividad</button>
      </div>
    </div>
  );
};

export default Nav;
