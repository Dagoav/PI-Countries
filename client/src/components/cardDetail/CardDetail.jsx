import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../../redux/actions";
import Nav from "../nav/Nav.jsx";
import Card from "../card/Card";
import "./CardDetail.css";

const CardDetail = () => {
  const { code } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  const [activities, SetActivities] = useState([]);
  const {
    id,
    name,
    continent,
    img_flag,
    capital,
    population,
    subregion,
    area,
  } = country;

  console.log(country);
  useEffect(() => {
    dispatch(getCountryDetail(code));
  }, []);

  useEffect(() => {
    SetActivities(country.activities);
  }, [country]);

  return (
    <>
      <Nav />
      <div className="bkg-card-detail"></div>
      <div className="container-cards">
        <Card
          id={id}
          name={name}
          continent={continent}
          flag={img_flag}
          extraInfo={true}
          capital={capital}
          population={population}
          subregion={subregion}
          area={area}
        />
        {activities && activities.length > 0 && (
          <div className="activity-detail ">
            <span className="big-title ">Activities</span>
            {activities.map((act) => (
              <div className="activity-data" key={act.id}>
                <div>
                  <span className="title-detail">Name: </span>
                  <span className="contect-detail"> {act.name}</span>
                </div>
                <div>
                  <span className="title-detail">Duration: </span>
                  <span className="contect-detail"> {act.duration} Hrs</span>
                </div>
                <div>
                  <span className="title-detail">Dificulty: </span>
                  <span className="contect-detail"> {act.dificulty}</span>
                </div>
                <div>
                  <span className="title-detail">Season: </span>
                  <span className="contect-detail"> {act.season}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CardDetail;
