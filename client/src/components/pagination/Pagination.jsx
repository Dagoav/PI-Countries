import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPaginationParams } from "../../redux/actions";
import "./Pagination.css";

const Pagination = ({ pageSize }) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const filterState = useSelector((state) => state.filterState);

  const [pages, setPages] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, [pages, filterState]);

  useEffect(() => {
    if (countries.length > 0) {
      let totalPages = Math.ceil(countries.length / pageSize);

      if (countries.length >= 250) {
        setPages(() => Array.from(Array(totalPages + 1).keys()));
        return;
      }

      setPages(() => Array.from(Array(totalPages).keys()));
    }
  }, [countries]);

  const handlePage = (index) => {
    setActive(true);

    let start = index * pageSize - 1;
    let end = start + pageSize;

    if (index === 0) {
      start = 0;
      end = 9;
    }

    dispatch(setPaginationParams({ start, end }));
  };

  return (
    <div className="pagination">
      {pages.map((p, i) => (
        <button
          id={`btn${i}`}
          key={`btn${i}`}
          className={!active && i == 0 ? "active" : "indexElement"}
          onClick={() => handlePage(i)}
        >
          <span>{i + 1}</span>
        </button>
      ))}
    </div>
  );
};

export default Pagination;

// {(pageNumber === page) ? `${style.active} ${style.btnPage}` : `${style.btnPage}`}
