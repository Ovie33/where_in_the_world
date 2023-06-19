import React from "react";
import style from "./borderCard.module.css";

function BorderCard({ name }) {
  return (
    <div>
      <button className={style.button}>{name}</button>
    </div>
  );
}

export default BorderCard;
