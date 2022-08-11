import React from "react";
import Cards from "../../components/cards/Cards";
import Filters from "../../components/filters/Filters";
import Nav from "../../components/nav/Nav";
import "./Main.css";

// 5. paginado

const Main = (props) => {
  return (
    <div className="bkg-main">
      <div className="grid-main">
        <header>
          <Nav></Nav>
        </header>
        <div className="central-view">
          <div>
            <Filters></Filters>
          </div>
          <div>
            <Cards></Cards>
          </div>
        </div>
        <div className="pagination">Paginado</div>
      </div>
    </div>
  );
};

export default Main;
