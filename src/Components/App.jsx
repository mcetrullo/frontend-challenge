import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header.jsx";
import GetAlbums from "./GetAlbums.jsx";
import Help from "./Help.jsx";
import ScrollButton from "./ScrollButton.jsx";

const App = () => (
  <div className="App">
    <Header />
    <GetAlbums />
    <ScrollButton />
    <Help />
  </div>
);

export default App;
