import React from "react";
import { useDispatch } from "react-redux";
import {
  getAllCountries,
  orderByActivity,
  setPaginationParams,
} from "../../redux/actions";
import "./SelectActivity.css";

const SelectActivity = ({ title, name, options }) => {
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    let selectValue = e.target.value;
    console.log(e.target.name, selectValue);
    dispatch(setPaginationParams({ start: 0, end: 9 }));
    if (selectValue === "all") {
      dispatch(getAllCountries());
    } else {
      dispatch(orderByActivity(selectValue));
    }
  };

  return (
    <div>
      <div className="content-select">
        <div className="select-title">
          <span> {title ? `${title}: ` : "someLabel"} </span>
        </div>
        <div className="boxSelect">
          <select name={name} onChange={(e) => handleSelect(e)}>
            <option value="all">Todos</option>
            {options &&
              options.map((op, i) => (
                <option value={op} key={`${op}-${i}`}>
                  {op}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectActivity;