// Section.js
import React, { useState, useEffect } from "react";
import "./Section.css";

function Section({ id, children }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerClassName = `${id}_container`;

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.10 }
    );

    const target = document.getElementById(id);
    if (target) {
      sectionObserver.observe(target);
    }

    return () => sectionObserver.disconnect();
  }, [id]);

  return (
    <section
      className={`sections min-w-full max-w-screen-md mx-auto ${isVisible ? "active" : ""}`}
      id={id}
    >
      <div className={`${containerClassName} ${isVisible ? "fade-in" : ""}`}>
        {children}
      </div>
    </section>
  );
}

export default Section;