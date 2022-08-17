import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAllCountries,
  getCountriesByname,
  setPaginationParams,
} from "../../redux/actions";
import "./SearchBar.css";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(() => e.target.value);
  };

  useEffect(() => {
    if (inputValue !== "") {
      dispatch(getCountriesByname(inputValue));
      dispatch(setPaginationParams({ start: 0, end: 9 }));
    } else {
      dispatch(getAllCountries());
    }
  }, [inputValue]);

  const clearText = () => {
    console.log(inputValue);
    setInputValue(() => "");
  };

  return (
    <div className="search">
      <input
        placeholder="Search country..."
        type="text"
        id="inputSearch"
        onChange={handleChange}
        value={inputValue}
        autoComplete="off"
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
  );
};

export default SearchBar;
