import React, { useState, useEffect } from "react";
import css from "../Assets/css/ScrollButton.module.css";

/* This function creates a scroll to top button
    that is only visible when a user has scrolled down the page some */

const ScrollButton = () => {
  // define the inital state of showButton to false
  const [showButton, setShowButton] = useState(false);

  /* This function changes the state of showButton depending on where
    within the page the user is */
  const buttonVisible = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // This function scrolls back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // event listener for scroll that defines if the button is visible
  useEffect(() => {
    window.addEventListener("scroll", buttonVisible);
  });

  return (
    <div className="scrollWrapper">
      {/* uses a conditional render to only create the button if showButton is true*/}
      {showButton && (
        <div onClick={scrollToTop}>
          <div className={css.scroll}>
            <i className="fas fa-long-arrow-alt-up"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollButton;
