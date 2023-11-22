// Header.js

import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../images/svg/Logo.svg";
import whiteTelegramLogo from "../../images/svg/white-telegram.svg";
import telegramLogo from "../../images/svg/telegram.svg";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const stickyThreshold = 40;

      setIsSticky(scrollPosition > stickyThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header w-full ${isSticky ? "sticky" : ""}`}>
      <div className="header_content">
        <div className="header_logo_links">
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
        <div className="header_btn_container">
          <button
            className="btn-join-community"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={isHovered ? whiteTelegramLogo : telegramLogo}
              alt="Telegram Logo"
            />
            <span className="header_btn_txt">Join Community</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
