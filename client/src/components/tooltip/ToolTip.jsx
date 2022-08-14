import React, { useEffect, useRef } from "react";
import "./ToolTip.css";

const ToolTip = ({ title, msg }) => {
  return (
    <div className="tooltip">
      {title || "Title"}
      <span className="tooltiptext">{msg || "Message"}</span>
    </div>
  );
};

export default ToolTip;
