import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions";
const { applyFilterName, applyFilterPop } = require("./utils/filter");
import Card from "../card/Card";
import "./Cards.css";

const Cards = (props) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const filter = useSelector((state) => state.filter);

  let displayCards = [];
  let copyCountries = Array.from(countries);

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  displayCards = countries;

  if (filter.hasOwnProperty("order")) {
    console.log({ filter });
    displayCards = applyFilterName(filter.value, countries, copyCountries);
    if (filter.value === "none") {
      displayCards = countries;
    }
  }
  if (filter.hasOwnProperty("population")) {
    console.log({ filter });
    displayCards = applyFilterPop(filter.value, countries, copyCountries);
    if (filter.value === "none") {
      displayCards = countries;
    }
  }

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
