import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import { applyFilter } from "./utils/filter";
import { pagination } from "./utils/pagination";
import Card from "../card/Card";
import "./Cards.css";

const Cards = (props) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const filterState = useSelector((state) => state.filterState);
  const pag_params = useSelector((state) => state.pagination_params);
  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  let filterCards = applyFilter(filterState, countries);
  let displayCards = pagination(pag_params, filterCards);


  return (
    <div className="gallery-cards">
      {displayCards && displayCards.length > 0 ? (
        displayCards.map((c) => (
          <Card
            key={c.id}
            name={c.name}
            continent={c.continent}
            flag={c.img_flag}
          ></Card>
        ))
      ) : (
        <p className="notFound">No Data</p>
      )}
    </div>
  );
};

export default Cards;
