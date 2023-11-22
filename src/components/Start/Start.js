// Start.js
import React from "react";
import "./Start.css";
import Mac from "../../images/screenshots/Mac.png";
import how_works from "../../images/svg/Play.svg";
import macIcon from "../../images/svg/Apple.svg";
import windowsIcon from "../../images/svg/Windows.svg";
import phoneIcon from "../../images/svg/Phone.svg";

const Start = () => (
  <div className="start_content">
    <div className="start-text">
      <div className="badge">
        <div className="badge-base">
          <div className="badge-text">Crypto AI</div>
        </div>
        <p className="badge-message">Best product on the market</p>
      </div>
      <h1 className="crypto-ai-title">
        Crypto AI
        <br />
        Software
      </h1>
      <p className="crypto-ai-description">
        Start finding wallets with forgotten cryptocurrency today! The algorithm
        of our software is based on artificial intelligence, which allows it to
        work faster than its competitors.
      </p>

      <div className="buttons-row">
        <button className="buy-software-button">Buy Software</button>
        <button className="how-it-works-button">
          <img src={how_works} alt="How It Works" className="button-icon" />
          How It Works
        </button>
      </div>

      <div className="compatible-text">Compatible with:</div>

      <div className="compatible-cards">
        <div className="compatible-card">
          <img src={macIcon} alt="Mac" className="compatible-icon" />
          Mac
        </div>
        <div className="compatible-card">
          <img src={windowsIcon} alt="Windows" className="compatible-icon" />
          Windows
        </div>
        <div className="compatible-card">
          <img src={phoneIcon} alt="Phone" className="compatible-icon" />
          Phone
        </div>
      </div>
    </div>
    <img className="start-image" src={Mac} alt="Start" />
    <div className="start-text">
      <div className="compatible-text-mobile">Compatible with:</div>

      <div className="compatible-cards-mobile">
        <div className="compatible-card">
          <img src={macIcon} alt="Mac" className="compatible-icon" />
          Mac
        </div>
        <div className="compatible-card">
          <img src={windowsIcon} alt="Windows" className="compatible-icon" />
          Windows
        </div>
        <div className="compatible-card">
          <img src={phoneIcon} alt="Phone" className="compatible-icon" />
          Phone
        </div>
      </div>
    </div>
  </div>
);

export default Start;
