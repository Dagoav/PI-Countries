import React from "react";
import Nav from "../nav/Nav";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="bkg-notFound">
      <Nav searchBar={false} />
    </div>
  );
};

export default PageNotFound;
