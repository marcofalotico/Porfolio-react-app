import React from 'react';
import './scrollup.css';
import { HiOutlineArrowSmUp } from "react-icons/hi";

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });
  
    return (
      <button
        type="button"
        className="scrollup"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Torna in alto"
      >
        <HiOutlineArrowSmUp className="scrollup__icon"/>
      </button>
  );
}

export default ScrollUp;