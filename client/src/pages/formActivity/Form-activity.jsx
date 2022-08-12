import React from "react";
import { Link } from "react-router-dom";

const FormActivity = (props) => {
  return (
    <div>
      form activity
      <Link to={"/home"}>
        <p>return home</p>
      </Link>
    </div>
  );
};

export default FormActivity;
