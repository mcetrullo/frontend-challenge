import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import css from "../Assets/css/DisplayAlbums.module.css";
import SearchAlbums from "./SearchAlbums.jsx";
import Album from "./Album.jsx";






const DisplayAlbums = () => {

  // maintains state of all album data, and albums to display to user
  const [albumData, setAlbumsData] = useState([]);
  const [visibleAlbums, setVisible] = useState([])


  // Fetch the data for the current top charts and set state
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json");
      const data = await response.json();
      // initally these values should be the same to show all albums
      setAlbumsData(data.feed.entry);
      setVisible(data.feed.entry)
    };
    fetchData();
  }, []);

  /* This is the event handler for the search function. It sets the state of 'visibleAlbums'
    to be representitve of where the search keyword aligns with album data */
  function searchAlbums(e) {
    // e.target.value represents the user input value passed to the function
    let keyword = e.target.value;

    // searchedAlbums will be a temp holder of the search results
    let searchedAlbums = [];

    // Goes through each album within the album data
    albumData.forEach((item) => {
      if (
        // Checks if keyword is found with the album name
        item["im:name"]["label"].toLowerCase().includes(keyword.toLowerCase())
      )
        searchedAlbums.push(item);
      else if (
        // Checks if keyword is found with the artist name
        item["im:artist"]["label"].toLowerCase().includes(keyword.toLowerCase())
      )
        searchedAlbums.push(item);
      else if (
        // Checks if keyword is found within the genre
        item["category"]["attributes"]["label"]
          .toLowerCase()
          .includes(keyword.toLowerCase())
      )
        searchedAlbums.push(item);
    });

    // updates the visible album state
    setVisible(searchedAlbums);
    console.log(searchedAlbums)

  };


  return (
    <div>
      <SearchAlbums searchAlbums={searchAlbums} />
      {visibleAlbums.length ? (<div><Container>
        {/* use Bootstrap to define how many albums fit in a row for
            multiple device sizes */}
        <Row xs={1} sm={2} md={3} lg={4} xl={5}>
          {/* calls getAlbums function for only visible albums */}
          {visibleAlbums.map((album, i) =>
            <Album key={i}
              coverArt={album["im:image"][2].label}
              albumName={album["im:name"].label}
              artist={album["im:artist"].label}
              genre={album["category"]["attributes"].label} />)}
        </Row>
      </Container></div>) : (<div className={css.noAlbums}>No albums match your search!</div>)
      }

    </div>
  );

}

export default DisplayAlbums;