import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineSparkles } from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">3+ year Dev<br />6+ year Creator</span>
        </div>
        <div className="about__box">
            <HiOutlineTerminal className="about__icon" />
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">Web Apps (7+)<br />Business (3+)</span>
        </div>
        <div className="about__box">
            <HiOutlineSparkles className="about__icon" />
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7<br />Assistance</span>
        </div>
    </div>
  );
}

export default Info;