import style from "./home.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import Dropdown from "../../components/dropdown/Dropdown";
import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/card/Card";
import Axios from "axios";

function Home() {
  const [display, setDisplay] = useState("none");

  const [input, setInput] = useState("");
  const [region, setRegion] = useState("");

  const fetchItems = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const Data = await data.json();
    setItems(Data);
  };

  const fetchSearchItems = async () => {
    const data = await fetch(`https://restcountries.com/v3.1/name/${input}`);
    const Data = await data.json();
    setItems(Data);
  };
  const fetchSearchItemsRegion = async (name) => {
    const data = await fetch(`https://restcountries.com/v3.1/region/${name}`);
    console.log(data);
    const Data = await data.json();
    setItems(Data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const onClick = () => {
    setDisplay("");
    if (display == "") {
      setDisplay("none");
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.navbar}>
          <div>
            <p className={style.navText}>Where in the world?</p>
          </div>
        </div>
        <div className={style.search}>
          <div className={style.input_search}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              className={style.inputBox}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search for a country..."
            />
            <button className={style.searchButton} onClick={fetchSearchItems}>
              search
            </button>
          </div>
          <div className={style.dropdownContainer}>
            <div onClick={onClick} className={style.dropdown}>
              <div className={style.dropdownIconContainer}>
                <div className={style.dropdownHeader}>Filter by Region</div>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            <div className={style.dropdownItems} style={{ display }}>
              <Dropdown name={"Africa"} onClick={fetchSearchItemsRegion} />
              <Dropdown name={"America"} onClick={fetchSearchItemsRegion} />
              <Dropdown name={"Asia"} onClick={fetchSearchItemsRegion} />
              <Dropdown name={"Europe"} onClick={fetchSearchItemsRegion} />
            </div>
          </div>
        </div>
        <div className={style.cardContainer}>
          {items.map((item) => {
            return (
              <Card
                key={item.name.common}
                name={item.name.common}
                image={item.flags.png}
                population={item.population.toLocaleString()}
                region={item.region}
                capital={item.capital}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
