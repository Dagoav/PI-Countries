import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries, postActivity } from "../../redux/actions";
import { validate } from "./validate.js";
import Nav from "../../components/nav/Nav";
import ToolTip from "../../components/tooltip/ToolTip";
import "./Form-activity.css";
import Notification from "../../components/notification/Notification";

const sortNameASC = (array) => {
  return array.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
};

const FormActivity = (props) => {
  const countries = useSelector((state) => state.countries);
  const displayCountries = sortNameASC(countries);
  const dispatch = useDispatch();

  const seasons = ["Spring", "Summer", "Autumn", "Winter"];
  const selectSeason = useRef();
  const [isSelected, setIsSelected] = useState(false);
  const [sendNotification, setSendNotification] = useState("");
  const [error, setError] = useState({
    name: "",
    country: "",
  });
  const [countriesList, setCountriesList] = useState([]);

  const initialState = {
    name: "",
    dificulty: 1,
    duration: 1,
    season: "spring",
    countries: [],
  };

  const [values, setValues] = useState(initialState);

  useEffect(() => {
    dispatch(getAllCountries());
    resetState();
  }, []);

  useEffect(() => {
    let display = document.querySelector(".displayBox");
    display.scrollTo(0, display.scrollHeight);

    // add countriesList id to values
    let idCountriesList = countriesList.map((c) => c.id);
    setValues((prev) => ({
      ...prev,
      ["countries"]: idCountriesList,
    }));

    // validate country errors
    if (isSelected) {
      let objError = validate({ ...values, ["countries"]: countriesList });
      setError({ ...error, ["country"]: objError.country });
    }
  }, [countriesList]);

  const resetState = () => {
    setValues({ ...initialState });
    setIsSelected(false);
    setCountriesList([]);
  };

  const handleName = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    let objError = validate({ ...values, [e.target.name]: e.target.value });
    setError({ ...error, ["name"]: objError.name });
  };

  const handleDificult = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDuration = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectSeason = (e) => {
    setValues((prev) => prev, (values.dificult = e.target.value));
  };

  const handleSelectCountry = (e) => {
    setIsSelected(true);
    let selectValue = e.target.value;
    let findCountry = countries.find((c) => c.id === selectValue);
    if (countriesList.includes(findCountry)) return;

    setCountriesList((prev) => [...prev, findCountry]);
  };

  const removeCountry = (country) => {
    let findCountry = countries.find((c) => c.id === country.id);
    setCountriesList(countriesList.filter((c) => c.id !== findCountry.id));
  };

  const createActivity = (e) => {
    e.preventDefault();
    // validate errors
    let objError = validate(values);
    setError(objError);
    if (objError.error || objError.success === false) return;
    let sendValues = dispatch(postActivity(values));
    sendValues.then((res) => {
      if (res.hasOwnProperty("errors")) {
        alert(res.original.detail);
        return;
      }
      console.log(values);
      setSendNotification(() => values.name);
      resetState();
    });
  };

  return (
    <div className="bkg-form-activity">
      <header>
        <Nav searchBar={false} />
      </header>
      <div className="form-activity">
        <p className="title">New Activity</p>
        <form id="form">
          <div className="boxInputName">
            <label htmlFor="name">Name: </label>
            <input
              className={error.name ? "inputName-error" : "inputName"}
              name="name"
              type="text"
              autoFocus
              value={values.name}
              placeholder="Ex: Football..."
              onChange={handleName}
            />
            {error.name && <span className="error">{error.name}</span>}
          </div>
          <div>
            <label className="info" htmlFor="dificult">
              <ToolTip
                title={"Dificult: "}
                msg={"Dificult activity 5 to max 1 to min."}
              />
            </label>
            <input
              className="input"
              name="dificulty"
              type="number"
              value={values.dificulty}
              min="1"
              max="5"
              step="1"
              onChange={handleDificult}
            />
          </div>
          <div>
            <label className="info" htmlFor="name">
              <ToolTip
                title={"Duration: "}
                msg={"Duration activity in hours."}
              />
            </label>
            <input
              className="input"
              name="duration"
              type="number"
              value={values.duration}
              min="1"
              max="24"
              step="1"
              onChange={handleDuration}
            />
            <span className="sufix">Hrs</span>
          </div>
          <div className="boxSelect">
            <label className="info" htmlFor="season">
              Season:
            </label>
            <div>
              <select
                ref={selectSeason}
                className="custom-select"
                name={"season"}
                onChange={(e) => handleSelectSeason(e)}
              >
                {seasons.map((op) => (
                  <option value={op.toLowerCase()} key={op}>
                    {op}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="boxSelect">
            <label className="info" htmlFor="countries">
              Country:
            </label>
            <select
              className="custom-select"
              name={"countries"}
              onChange={(e) => handleSelectCountry(e)}
            >
              {displayCountries.map((op) => (
                <option value={op.id} key={op.id}>
                  {op.name}
                </option>
              ))}
            </select>
            {error.country && (
              <span className="errorCountry">{error.country}</span>
            )}
          </div>
          <div className="displayBox">
            {countriesList.map((c) => (
              <div className="displayCards" key={c.id}>
                <div className="mini-card">
                  <span>{c.name || "name"}</span>
                  <img src={c.img_flag} alt="flag" width={50} height={30} />
                </div>
                <div>
                  <span
                    className="material-symbols-outlined icon-remove"
                    onClick={() => removeCountry(c)}
                  >
                    cancel
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            className="btn-submit"
            type="submit"
            onClick={(e) => createActivity(e)}
          >
            Crear
          </button>
        </form>
      </div>
      {sendNotification !== "" && (
        <Notification message={`Actividad ${sendNotification} creada`} />
      )}
    </div>
  );
};

export default FormActivity;
