import React, { useState, useRef } from "react";
import Modal from "react-modal";
import "./Reviews.css";

import telegramIcon from "../../images/svg/white-telegram.svg";
import screenshot_1 from "../../images/screenshots/Reviews_1.png";
import screenshot_2 from "../../images/screenshots/Reviews_2.png";
import screenshot_3 from "../../images/screenshots/Reviews_3.png";
import screenshot_4 from "../../images/screenshots/Reviews_4.png";
import screenshot_5 from "../../images/screenshots/Reviews_5.png";

const screenshots = [
  screenshot_1,
  screenshot_2,
  screenshot_3,
  screenshot_4,
  screenshot_5,
];

const Reviews = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const carouselRef = useRef();

  return (
    <div className="reviews_content">
      <div className="reviews_header">
        <h2>Customer Reviews</h2>
        <button className="jchannel_btn_reviews">
          <img src={telegramIcon} alt="Join Channel" />
          Join Channel
        </button>
      </div>
      <div className="screenshots_grid" ref={carouselRef}>
        {screenshots.map((screenshot, i) => (
          <div
            key={i}
            className="screenshot_item"
            onClick={() => openModal(screenshot)}
          >
            <img src={screenshot} alt={`Screenshot ${i + 1}`} />
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Screenshot Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <img src={selectedImage} alt="Selected Screenshot" />
      </Modal>
    </div>
  );
};

export default Reviews;
