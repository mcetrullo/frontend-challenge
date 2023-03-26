import React from "react";
import css from "../Assets/css/App.module.css";
import Header from "./Header.jsx";
import Help from "./Help.jsx";
import ScrollButton from "./ScrollButton.jsx";
import DisplayAlbums from "./DisplayAlbums";

const App = () => (
  <div className="App">
    <div className = {css.body}>
    <Header />
    <DisplayAlbums/>
    <ScrollButton />
    <Help />
    </div>
  </div>
);

export default App;
