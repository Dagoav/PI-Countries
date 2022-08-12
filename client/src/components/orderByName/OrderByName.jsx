import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { orderByname, setPaginationParams } from "../../redux/actions";
import "./OrderByName.css";

const OrderByName = ({ title, name, options }) => {
  const [select, setSelect] = useState({
    value: "",
  });

  const dispatch = useDispatch();
  let selectElement = useRef();

  useEffect(() => {
    dispatch(orderByname(select));
    dispatch(setPaginationParams({ start: 0, end: 9 }));
  }, [select]);

  const handleSelect = (e) => {
    let value = selectElement.current.value;
    if (value == "A-Z") {
      value = "ASC";
    } else if (value == "Z-A") {
      value = "DESC";
    } else {
      value = "none";
    }
    setSelect((prev) => ({
      [e.target.name]: e.target.value,
      value,
    }));
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
            <option value="none">None</option>
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

export default OrderByName;
