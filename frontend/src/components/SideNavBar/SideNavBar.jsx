import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideNavBar.css";
import PastQuestions from "../PastQuestions/PastQuestions";
import home from "../../assets/images/home.svg";
import pastQuestions from "../../assets/images/pastQuestions.svg";
import portfolio from "../../assets/images/portfolio.svg";
import openSideBar from "../../assets/images/openSideBar.svg";
import closeSideNavBar from "../../assets/images/closeSideNavBar.svg";

const SideNavBar = () => {
  const [showPast, setShowPast] = useState(false);
  const [closeSidebar, setCloseSidebar] = useState(false);

  const movesideNavBar = () => {
    setShowPast((prev) => !prev);
  };

  const opensideNavBar = () => {
    setCloseSidebar((prev) => !prev);
  };

  return (
    <>
      <div className={closeSidebar ? "sidebar-container" : "moveside-bar"}>
        <nav className="nav-item-list" >
          <Link to="/" className="nav-text" title={closeSidebar ? "" : "Home"}>
            <img src={home} alt="Home" />

            <span className={closeSidebar ? "show-nav-names" : "hide-nav-names"} >Home</span>
          </Link>
          <Link
            to="https://thulasivportfolio.netlify.app/"
            target="blank"
            className="nav-text"
            title={closeSidebar ? "" : " My Portfolio"}
          >
            <img src={portfolio} alt="My Portfolio" />

            <span className={closeSidebar ? "show-nav-names" : "hide-nav-names"}>
              My Portfolio
            </span>
          </Link>
          <button onClick={movesideNavBar} className="past-questions nav-text" title={closeSidebar ? "" : "Past Questions"}>
            <img src={pastQuestions} alt="Past Questions" />

            <span className={closeSidebar ? "show-nav-names" : "hide-nav-names"}>
              Past Conversations
            </span>
          </button>
        </nav>
        <div className="open-close-side-bar" onClick={opensideNavBar}>
          <button>
            <img
              src={closeSidebar ? closeSideNavBar : openSideBar}
              alt=""
              title={closeSidebar ? "Close sidebar" : "Open sidebar"}
            />
          </button>
        </div>
        {showPast && <PastQuestions />}
      </div>
    </>
  );
};

export default SideNavBar;
