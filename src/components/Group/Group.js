import React from "react";
import "./style.css";

export const Group = ({ className, divClassName, text = "Ir a consulta" }) => {
  return (
    <div className={`group ${className}`}>
      <div className={`ir-a-consulta ${divClassName}`}>{text}</div>
    </div>
  );
};
