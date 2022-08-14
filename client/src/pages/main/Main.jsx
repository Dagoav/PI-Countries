import React from "react";
import Cards from "../../components/cards/Cards";
import Filters from "../../components/filters/Filters";
import Nav from "../../components/nav/Nav";
import Pagination from "../../components/pagination/Pagination";
import "./Main.css";

// 5. paginado

const Main = () => {
  return (
    <div className="bkg-main">
      <div className="grid-main">
        <header>
          <Nav searchBar={true} />
        </header>
        <div className="central-view">
          <div>
            <Filters />
          </div>
          <div>
            <Cards />
          </div>
        </div>
        <div className="pagination">
          <Pagination pageSize={10} />
        </div>
      </div>
    </div>
  );
};

export default Main;
