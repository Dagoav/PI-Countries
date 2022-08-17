import React from "react";
import html_png from "../../assets/tech/html.png";
import css_png from "../../assets/tech/css.png";
import react_png from "../../assets/tech/react.png";
import redux_png from "../../assets/tech/redux.png";
import node_png from "../../assets/tech/node.png";
import sequalize_png from "../../assets/tech/sequalize.png";
import postgres_png from "../../assets/tech/postgres.png";
import github_png from "../../assets/tech/github.png";
import "./Info.css";

const Info = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}

        <div className="technologies">
          <img src={html_png} alt="img" />
          <img src={css_png} alt="img" />
          <img src={react_png} alt="img" />
          <img src={redux_png} alt="img" />
          <img src={node_png} alt="img" />
          <img src={sequalize_png} alt="img" />
          <img src={postgres_png} alt="img" />
          <img src={github_png} alt="img" />
        </div>

        <div className="resources-img">
          <p>Images from:</p>
          <a
            href="https://www.freepik.es/vectores/fondos-pantalla"
            target="_blank"
          >
            Vector de fondos de pantalla creado por evening_tao - www.freepik.es
          </a>
          <a
            href="https://www.freepik.es/vectores/edificio-isometrico"
            target="_blank"
          >
            Vector de edificio isometrico creado por macrovector -
            www.freepik.es
          </a>
          <a
            href="https://www.freepik.es/vectores/red-internet"
            target="_blank"
          >
            Vector de red internet creado por rawpixel.com - www.freepik.es
          </a>
          <a
            href="https://www.freepik.es/vectores/parque-isometrico"
            target="_blank"
          >
            Vector de parque isometrico creado por redgreystock - www.freepik.es
          </a>

          <a href="https://www.freepik.es/vectores/error-web" target="_blank">
            Vector de error web creado por storyset - www.freepik.es
          </a>
        </div>
        <button className="btn-close-modal" type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Info;
