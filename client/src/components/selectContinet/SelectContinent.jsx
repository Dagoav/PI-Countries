import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  getAllCountries,
  orderByContinents,
  setPaginationParams,
} from "../../redux/actions";
import "./SelectContintient.css";

const SelectContinent = (props) => {
  const { title, name, options } = props;
  const dispatch = useDispatch();
  const selectElement = useRef();

  const handleSelect = (e) => {
    let selectValue = selectElement.current.value;
    console.log(e.target.name, selectValue);
    dispatch(setPaginationParams({ start: 0, end: 9 }));
    if (selectValue === "all") {
      dispatch(getAllCountries());
    } else {
      dispatch(orderByContinents(selectValue));
    }
  };

  return (
    <div>
      <div className="content-select">
        <div className="select-title">
          <span> {title ? `${title}: ` : "someLabel"} </span>
        </div>
        <div className="boxSelect">
          <select
            ref={selectElement}
            name={name}
            onChange={(e) => handleSelect(e)}
          >
            <option value="all">Todos</option>
            {options.map((op, i) => (
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

export default SelectContinent;
