// Footer.js
import React, { useState, useEffect } from "react";
import "./Footer.css";
import logo from "../../images/svg/Logo.svg";
import whiteTelegramLogo from "../../images/svg/white-telegram.svg";
import telegramLogo from "../../images/svg/telegram.svg";
import hamburgerMenu from "../../images/svg/menu.svg";
import hamburgerX from "../../images/svg/close.svg";

function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1078);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <footer className="footer w-full">
        <div className="footer_content">
          <div className="footer_logo_links">
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
      </footer>
      <div className="footer_under_container">
        <div className="footer_under">
          <span>© 2023 Crypto AI</span>
          <div className="footer_links">
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
          </div>
        </div>
      </div>
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

export default Footer;
