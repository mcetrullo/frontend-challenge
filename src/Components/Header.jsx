import React from "react";
import css from "../Assets/css/Header.module.css";

/* Includes the page title, and a short desciption */
const Header = () => (
  <div className={css.header}>
    <div className={css.title}>iTunes Top 100</div>
    <div className={css.description}>
      a regularly updated list of the top albums on the iTunes charts
    </div>
  </div>
);

export default Header;
