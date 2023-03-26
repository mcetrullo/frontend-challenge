import React from "react";
import Col from "react-bootstrap/Col";
import css from "../Assets/css/Album.module.css";

/* This component creates instance of an albums display information
 after being passed the album name, artist, genre and cover art from 
 the GetAlbums component. */

const Album = ({ albumName, artist, genre, coverArt }) => (
  // each album object is wrapped in Boostrap column
  <Col>
    <div className={css.album}>
      {/* albumHover class allows for easy styling when displaying details on hover */}
      <div className={css.albumHover}>
      <div className={css.coverArt}>
          <img src={coverArt} alt="Album Cover" />
        </div>
        <div className={css.details}>
          <div className={css.albumName}>{albumName}</div>
          <div className={css.artists}>{artist}</div>
          <div className={css.genre}>{genre}</div>
        </div>
        
      </div>
    </div>
  </Col>
);

export default Album;
