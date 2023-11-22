// Telegram.js
import React from "react";
import "./Telegram.css";

import telegramIcon from "../../images/svg/white-telegram.svg";

const Telegram = () => (
  <div className="telegram_content">
      <div className="telegram_content_txt">
        <h2 className="telegram_header">Learn more about us<br/> in Telegram channel:</h2>
        <button className="join_button">
          <img src={telegramIcon} alt="Join Channel" />
          Join Channel
        </button>
      </div>
  </div>
);

export default Telegram;
