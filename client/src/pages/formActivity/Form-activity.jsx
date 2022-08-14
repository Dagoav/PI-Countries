import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries, postActivity } from "../../redux/actions";
import { validate } from "./validate.js";
import Nav from "../../components/nav/Nav";
import ToolTip from "../../components/tooltip/ToolTip";
import "./Form-activity.css";

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
  const selectCountry = useRef();
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState({
    name: "",
    country: "",
  });
  const [countriesList, SetCountriesList] = useState([]);
  const [values, Setvalues] = useState({
    name: "",
    dificulty: 1,
    duration: 1,
    season: "spring",
    countries: [],
  });

  useEffect(() => {
    setSubmit(false);
    dispatch(getAllCountries());
  }, []);

  useEffect(() => {
    let display = document.querySelector(".displayBox");
    display.scrollTo(0, display.scrollHeight);

    if (submit) {
      let objError = validate({ ...values, ["countries"]: countriesList });
      setError({ ...error, ["country"]: objError.country });
    }
  }, [countriesList]);

  const handleName = (e) => {
    // Setvalues((prev) => prev, (values.name = e.target.value));
    Setvalues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    let objError = validate({ ...values, [e.target.name]: e.target.value });
    setError({ ...error, ["name"]: objError.name });
  };

  const handleDificult = (e) => {
    Setvalues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDuration = (e) => {
    Setvalues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectSeason = (e) => {
    console.log(selectSeason.current.value);
    Setvalues((prev) => prev, (values.dificult = e.target.value));
  };

  const handleSelectCountry = (e) => {
    let selectValue = selectCountry.current.value;
    let findCountry = countries.find((c) => c.id === selectValue);
    if (countriesList.includes(findCountry)) return;

    SetCountriesList((prev) => [...prev, findCountry]);

    Setvalues((prev) => ({
      ...prev,
      [e.target.name]: [...prev.countries, findCountry.id],
    }));
  };

  const removeCountry = (country) => {
    let findCountry = countries.find((c) => c.id === country.id);
    let filterCountry = countriesList.filter((c) => c.id !== findCountry.id);
    SetCountriesList(countriesList.filter((c) => c.id !== findCountry.id));
    Setvalues((prev) => ({
      ...prev,
      countries: filterCountry,
    }));
  };

  const createActivity = (e) => {
    e.preventDefault();
    setSubmit(true);
    let objError = validate(values);
    setError(objError); 

    if (objError.error || objError.success === false) return;
    let sendValues = dispatch(postActivity(values));
    sendValues.then((res) => {
      if (res.hasOwnProperty("errors")) {
        alert(res.original.detail);
        return;
      }
      alert(`Actividad ${values.name} creada`);
    });
    Setvalues({
      name: "",
      dificulty: 1,
      duration: 1,
      season: "spring",
      countries: [],
    });
    SetCountriesList([]);
    setSubmit(false);
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
              ref={selectCountry}
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
    </div>
  );
};

export default FormActivity;
