// Header.js

import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../images/svg/Logo.svg";
import whiteTelegramLogo from "../../images/svg/white-telegram.svg";
import telegramLogo from "../../images/svg/telegram.svg";
import hamburgerMenu from "../../images/svg/menu.svg";
import hamburgerX from "../../images/svg/close.svg";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const stickyThreshold = 40;

      setIsSticky(scrollPosition > stickyThreshold);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1078);
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <header className={`header w-full ${isSticky ? "sticky" : ""}`}>
        <div className="header_content">
          <div className="header_logo_links">
            {isMobile && (
              <div className="hamburger_menu" onClick={toggleModal}>
                <img
                  src={isModalOpen ? hamburgerX : hamburgerMenu}
                  alt="Menu"
                />
              </div>
            )}
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
      {isModalOpen && (
        <div className={`modal-menu ${isModalOpen ? "open" : ""}`}>
          <div className="modal-menu_content">
            <a href="#income" onClick={() => setIsModalOpen(false)}>
              About income
            </a>
            <a href="#works" onClick={() => setIsModalOpen(false)}>
              How it works
            </a>
            <a href="#results" onClick={() => setIsModalOpen(false)}>
              Results
            </a>
            <a href="#price" onClick={() => setIsModalOpen(false)}>
              Price
            </a>
            <a href="#reviews" onClick={() => setIsModalOpen(false)}>
              Reviews
            </a>
            <a href="#faq" onClick={() => setIsModalOpen(false)}>
              FAQs
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
