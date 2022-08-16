import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities, getContinents } from "../../redux/actions";
import OrderByName from "../orderByName/OrderByName";
import OrderByPopulation from "../orderByPopulation/OrderByPopulations";
import SelectActivity from "../selectActivity/SelectAvtivity";
import SelectContinent from "../selectContinet/SelectContinent";
import "./Filters.css";

const Filters = (props) => {
  const dispatch = useDispatch();
  const continents = useSelector((state) => state.continents);
  const activities = useSelector((state) => state.activities);
  let activitiesName = activities.map((a) => a.name);

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getContinents());
  }, []);

  return (
    <div className="filters">
      <div className="primary-filter">
        <SelectContinent
          title="Continents"
          name="continents"
          options={continents}
        />
        <SelectActivity
          title="Activities"
          name="activity"
          options={activitiesName}
        />
      </div>
      <div className="secondary-filter">
        <OrderByName title="Order" name="order" options={["A-Z", "Z-A"]} />
        <OrderByPopulation
          title="Population"
          name="population"
          options={["largest to smallest", "smallest to largest"]}
        />
      </div>
    </div>
  );
};

export default Filters;
