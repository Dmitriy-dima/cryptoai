import React from "react";
import "./Works.css";

const Works = () => (
  <div className="works_content">
    <span className="works-header">How it works?</span>
    <div className="video_player">
      <iframe
        title="Introduction to how Crypto AI works"
        width="1200"
        height="548"
        src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1"
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  </div>
);

export default Works;
