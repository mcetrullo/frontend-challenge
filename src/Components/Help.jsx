import React from "react";
import css from "../Assets/css/Help.module.css";

/* a small text box to explain the hover for more information feature 
    to user on desktop */

const Help = () => (
  <div className={css.help}>
    <p>Hover over the cover art to get the album name, artist, and genre!</p>
  </div>
);

export default Help;
