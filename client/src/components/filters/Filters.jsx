import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities, getContinents } from "../../redux/actions";
import OrderByName from "../orderByName/OrderByName";
import OrderByPopulation from "../orderByPopulation/OrderByPopulations";
import SelectContinent from "../selectContinet/SelectContinent";
import "./Filters.css";

const Filters = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getContinents());
  }, []);

  const continents = useSelector((state) => state.continents);
  const stateAct = useSelector((state) => state.activities);
  let opActivities = stateAct.map((act) => act.name);

  return (
    <div className="filters">
      <div className="primary-filter">
        <SelectContinent
          title="Continente"
          name="continents"
          options={continents}
        ></SelectContinent>

        {/* <Select
          title="Actividad"
          name="activity"
          options={opActivities}
        ></Select> */}
      </div>
      <div className="secondary-filter">
        <OrderByName
          title="Orden"
          name="order"
          options={["A-Z", "Z-A"]}
        ></OrderByName>
        <OrderByPopulation
          title="Población"
          name="population"
          options={["Mayor a menor", "Menor a mayor"]}
        ></OrderByPopulation>
      </div>
    </div>
  );
};

export default Filters;
