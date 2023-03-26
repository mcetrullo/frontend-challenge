import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import css from "../Assets/css/Search.module.css";

// takes the searchAlbum function from parent component 'DisplayAlbums' as props
const SearchAlbums = ({searchAlbums}) => {    

return (
<div className={css.searchInput}>
          {/* on xs and sm devices, search bar will span entire screen */}
          <Container fluid="md">
            <Row md={2}>
              <input
                type="search"
                onChange={searchAlbums}
                placeholder= "search albums, artists and genres!"
              ></input>
            </Row>
          </Container>
        </div>
      );
};
  
  export default SearchAlbums;