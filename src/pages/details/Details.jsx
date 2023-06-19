import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./details.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BorderCard from "../../components/borderCrad/BorderCard";

function Details() {
  const { id } = useParams();

  const fetchItems = async () => {
    const data = await fetch(`https://restcountries.com/v3.1/name/${id}`);
    const Data = await data.json();
    setItems(Data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const [borders, setBorders] = useState([]);

  return (
    <div className={style.box}>
      <div className={style.container}>
        <div className={style.navbar}>
          <div>
            <p className={style.navText}>Where in the world?</p>
          </div>
          <div className={style.darkMode}>
            <FontAwesomeIcon className={style.icon} icon={faMoon} />
            Dark Mode
          </div>
        </div>
        <Link to="/" style={{ all: "unset" }}>
          <div className={style.backButtonContainer}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <button className={style.backButton}>Back</button>
          </div>
        </Link>
        {items.map((item) => {
          return (
            <div key={item.name.common} className={style.detailContainer}>
              <div className={style.imageContainer}>
                <img src={item.flags.png} alt="" className={style.image} />
              </div>
              <div className={style.detailTextContainer}>
                <div className={style.textContainer}>
                  <div className={style.headerContainer}>
                    <h4 className={style.header}>{item.name.common}</h4>
                  </div>
                  <div className={style.subContainer}>
                    <div className={style.sub1}>
                      <p className={style.text}>
                        Native Name: <span className={style.span}></span>
                      </p>
                      <p className={style.text}>
                        Population:{" "}
                        <span className={style.span}>
                          {item.population.toLocaleString()}
                        </span>
                      </p>
                      <p className={style.text}>
                        Region:{" "}
                        <span className={style.span}>{item.region}</span>
                      </p>
                      <p className={style.text}>
                        Sub Region:{" "}
                        <span className={style.span}>{item.subregion}</span>
                      </p>
                      <p className={style.text}>
                        Capital:{" "}
                        <span className={style.span}>{item.capital}</span>
                      </p>
                    </div>
                    <div className={style.sub2}>
                      <p className={style.text}>
                        Top Level Domain:{" "}
                        <span className={style.span}>{item.tld}</span>
                      </p>
                      <p className={style.text}>
                        Currencies: <span className={style.span}></span>
                      </p>
                      <p className={style.text}>
                        Language:{" "}
                        <span className={style.span}>{item.languages.spa}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={style.border}>
                  <div>
                    <p className={style.borderText}>Border Countries:</p>
                  </div>
                  {
                    <div className={style.BorderCard}>
                      <BorderCard name={item.borders[0]} />
                      <BorderCard name={item.borders[1]} />
                      <BorderCard name={item.borders[2]} />
                    </div>
                  }
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Details;
