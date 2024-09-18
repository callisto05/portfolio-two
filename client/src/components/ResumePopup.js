import React, { useState } from "react";
import "../styles/ContactForm.css"; // Reuse the ContactForm styles
import "../styles/ResumePopup.css"; // Import the custom CSS file

const ResumePopup = ({ show, onHide }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1qq5oTIvh4iZw8IZbTLw-Ot4BFaEgyoIM/view?usp=drive_link";
    link.click();
    handleClose();
  };

  const handleLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/dev-prathamesh-bhosale/",
      "_blank"
    );
    onHide();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onHide();
    }, 500); // Match the duration of the fade-out animation
  };

  return (
    show && (
      <div className="contact-form-overlay">
        <div
          className={`contact-form-container ${isClosing ? "fade-out" : ""}`}
        >
          <button className="form-close-button" onClick={handleClose}>
            &times;
          </button>
          <h2>Resume</h2>
          <p>
            Download the resume or visit my LinkedIn profile to learn more!
          </p>
          <div className="form-group">
            <button className="custom-button resume" onClick={handleDownload}>
              Download Resume
            </button>
            <button className="custom-button resume" onClick={handleLinkedIn}>
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ResumePopup;
