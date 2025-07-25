/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Component = ({
  className,
  divClassName,
  text = "Ir a la App",
}) => {
  return (
    <div className={`component ${className}`}>
      <div className={`ir-a-la-app ${divClassName}`}>{text}</div>
    </div>
  );
};
