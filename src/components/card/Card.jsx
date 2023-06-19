import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css";

function Card({ name, population, region, capital, image }) {
  return (
    <Link to={`/details/name/${name}`} style={{ all: "unset" }}>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <img src={image} alt="" className={style.image} />
        </div>
        <div className={style.textBox}>
          <div className={style.header}>
            <h4>{name}</h4>
          </div>
          <div className={style.details}>
            <p className={style.detailsText}>
              Population:{" "}
              <span className={style.spanDetails}>{population}</span>
            </p>
            <p className={style.detailsText}>
              Region: <span className={style.spanDetails}>{region}</span>
            </p>
            <p className={style.detailsText}>
              Capital: <span className={style.spanDetails}>{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
