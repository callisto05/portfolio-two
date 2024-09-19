import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HelloComponent from "./components/HelloComponent";
import ContactForm from "./components/ContactForm";
import ResumePopup from "./components/ResumePopup";
import Footer from "./components/Footer";

function App() {
  const [visibleDiv, setVisibleDiv] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showResumePopup, setShowResumePopup] = useState(false);

  const handleLinkClick = (link) => {
    if (link === "contact") {
      setShowContactForm(true);
    } else if (link === "about") {
      setVisibleDiv(`sliding-div-1`);
      setActiveLink(link);
    } else if (link === "resume") {
      setShowResumePopup(true);
    }
  };

  const handleCloseClick = () => {
    setVisibleDiv(null);
    setActiveLink(null); // Reset the active link
  };

  const handleNextClick = (nextDivId) => {
    setVisibleDiv(nextDivId);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  const handleCloseResumePopup = () => {
    setShowResumePopup(false);
  };

  return (
    <div>
      <Navbar
        onLinkClick={handleLinkClick}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <HelloComponent
        visibleDiv={visibleDiv}
        onCloseClick={handleCloseClick}
        onNextClick={handleNextClick}
      />
      {/* conditional rendering of components*/}
      {showContactForm && <ContactForm onClose={handleCloseContactForm} />}
      {showResumePopup && (
        <ResumePopup show={showResumePopup} onHide={handleCloseResumePopup} />
      )}
      <Footer />
    </div>
  );
}

export default App;