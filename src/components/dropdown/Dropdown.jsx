import React from "react";
import style from "./dropdown.module.css";

function Dropdown({ name, onClick }) {
  return (
    <div className={style.list}>
      <div className={style.dropdownListContainer}>
        <ul className="list">
          <li className={style.dropdownList}>
            <a className={style.dropdownLink} onClick={() => onClick(name)}>
              {name}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
