// FAQ.js
import React, { useState } from "react";
import DOMPurify from "dompurify";
import faqPlus from "../../images/svg/plus.svg";
import faqMinus from "../../images/svg/minus.svg";
import "./FAQ.css";

const FAQ = () => {
  const [expanded, setExpanded] = useState([]);

  const handleToggle = (index) => {
    setExpanded((prev) => {
      const isExpanded = prev.includes(index);
      if (isExpanded) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const sanitizeAndReplaceLineBreaks = (text) => {
    const sanitizedHTML = DOMPurify.sanitize(text, { ALLOWED_TAGS: ["br"] });
    return sanitizedHTML.replace(/\n/g, "<br/>");
  };

  const faqData = [
    {
      question: "Is it legal?",
      answer:
        "Yes, our software operates within the bounds of the law. We comply with all legal regulations and standards.",
    },
    {
      question: "Why are you selling software instead of using it yourself?",
      answer:
        "— Software maintenance costs a lot of money,\n \nI need to pay salaries to developers, pay for hosting, purchasing access to new AI, improving the algorithm\n \nBy selling software, I will not reduce my income, it will be only increased by investment in development\n \n«According to a recent study by digital forensics experts from Chainalysis, a firm that regularly analyzes the Bitcoin blockchain, the number of bitcoins lost forever ranges from 2.78 to 3.79 million bitcoins»",
    },
    {
      question: "How much money can software make?",
      answer:
        "The potential earnings of software can vary widely based on factors such as market demand, competition, and the value your software provides. There's no fixed amount, but successful software can generate substantial revenue.",
    },
    {
      question:
        "Are there minimum system requirements? What operating systems are supported?",
      answer:
        "Yes, our software has specific system requirements outlined in the documentation. We support multiple operating systems, including [list of supported OS]. Please check our documentation for detailed information.",
    },
    {
      question: "Can I launch the software on iPhone/Android?",
      answer:
        "Compatibility with iPhone/Android depends on the software. Please check the software specifications to determine if it's compatible with these platforms. We strive to provide versatile solutions, but it may vary.",
    },
  ];

  return (
    <div className="faq_content">
      <div className="faq_cards">
        <h2 className="faq_header">FAQs</h2>
        {faqData.map((faq, index) => (
          <div
            className={`faq_card ${expanded.includes(index) ? 'faq_card_expanded active' : ''}`}
            key={index}
            onClick={() => handleToggle(index)}
          >
            <div className="faq_card_header">
              <p>{faq.question}</p>
              <span>
                {expanded.includes(index) ? (
                  <img src={faqMinus} alt="Minus" />
                ) : (
                  <img src={faqPlus} alt="Plus" />
                )}
              </span>
            </div>
            {expanded.includes(index) && (
              <div className="faq_answer">
                <p
                  className="faq_text"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeAndReplaceLineBreaks(faq.answer),
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;