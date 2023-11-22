// Footer.js
import React, { useState } from "react";
import "./Footer.css";
import logo from "../../images/svg/Logo.svg";
import whiteTelegramLogo from "../../images/svg/white-telegram.svg";
import telegramLogo from "../../images/svg/telegram.svg";

function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="footer w-full">
      <div className="footer_content">
        <div className="footer_logo_links">
          <a href="#start">
            <img src={logo} className="logo" alt="Logo" />
          </a>
          <nav className="nav-links">
            <a href="#income">About income</a>
            <a href="#works">How it works</a>
            <a href="#results">Results</a>
            <a href="#price">Price</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQs</a>
          </nav>
        </div>
        <div className="footer_btn_container">
          <button
            className="btn-join-community"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={isHovered ? whiteTelegramLogo : telegramLogo}
              alt="Telegram Logo"
            />
            <span className="footer_btn_txt">Join Community</span>
          </button>
        </div>
      </div>
      <div className="footer_under">
        <span>
        © 2023 Crypto AI
        </span>
        <div className="footer_links">
        <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
