import React from "react";
import { Link } from "react-router-dom";
import "./HeroPage.css";

const HeroPage = () => {
  document.title = "Thulasi V | Frontend Developer";
  return (
    <>
      <div className="hero-section">
        <div className="hero-section-main">
          <div className="hero-section-content cards">
            <h1>
              Turn My Resume to conversation<span>...</span>
            </h1>
            <p>
              Instead of reading through pages, recruiters can ask my
              experiences, skills or projects and get instant answers powered by
              Al
            </p>
            <div className="button-chat-resume">
              <Link to="/resume-chat" className="ask-resume-btn">Ask About My Resume</Link>
            </div>
          </div>
          <div className="hero-section-resume-image cards">
            <div className="hero-section-bot-image">
              Work in Progress....
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
