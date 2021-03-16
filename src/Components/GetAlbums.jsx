import React from "react";
import Album from "./Album.jsx";
import css from "../Assets/css/GetAlbums.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class GetAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumsData: [],
      visibleAlbums: [],
    };
    this.getAlbums = this.getAlbums.bind(this);
    this.searchedAlbums = this.searchedAlbums.bind(this);
  }

  /* This fetches the API data and sets the albumData state, which will only change when the data is fetched,
    and sets the visible albums state, which will change depending on what albums are to be displayed */
  componentDidMount() {
    fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then((response) => response.json())
      .then((data) => {
        // data.feed.entry is essentially an array of the album data within the json
        this.setState({ albumsData: data.feed.entry });
        this.setState({ visibleAlbums: data.feed.entry });
      });
  }

  /* This function extracts album data and sends it to the 'Album' component
     to create object instances for each album to be displayed. It places the 
     newly created objects into an array that is returned */
  getAlbums(data) {
    const extractAlbums = [];
    if (data.length) {
      data.map((album, i) =>
        extractAlbums.push(
          <Album
            // indexes on album represent where within the API data each attribute is found
            coverArt={album["im:image"][2].label}
            albumName={album["im:name"].label}
            artist={album["im:artist"].label}
            genre={album["category"]["attributes"].label}
            key={i}
          />
        )
      );
      return extractAlbums;
    }
  }

  /* This is the event handler for the search function. It sets the state of 'visibleAlbums'
      to be representitve of where the search keyword aligns with album data */
  searchedAlbums(e) {
    // e.target.value represents the user input value passed to the function
    let keyword = e.target.value;

    // searchedAlbums will be a temp holder of the search results
    let searchedAlbums = [];

    // Goes through each album within the album data
    this.state.albumsData.forEach((item) => {
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
    this.setState({ visibleAlbums: searchedAlbums });
  }

  render() {
    return (
      <div className={css.siteBody}>
        <div className={css.searchInput}>
          {/* on xs and sm devices, search bar will span entire screen */}
          <Container fluid="md">
            <Row md={2}>
              <input
                type="search"
                value={this.state.value}
                onChange={this.searchedAlbums}
                placeholder="search albums, artists and genres!"
              ></input>
            </Row>
          </Container>
        </div>
        <Container>
          {/* use Bootstrap to define how many albums fit in a row for
            multiple device sizes */}
          <Row xs={1} sm={2} md={3} lg={4} xl={5}>
            {/* calls getAlbums function for only visible albums */}
            {this.getAlbums(this.state.visibleAlbums)}
          </Row>
        </Container>
      </div>
    );
  }
}

export default GetAlbums;
