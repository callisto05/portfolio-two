import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HelloComponent from './components/HelloComponent';
import ContactForm from './components/ContactForm';

function App() {
  const [visibleDiv, setVisibleDiv] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);

  // const handleAboutClick = () => {
  //   setVisibleDiv('sliding-div-1');
  // };

  const handleLinkClick = (link) => {
    if (link === "contact") {
      setShowContactForm(true);
    } else if (link === "about") {
      setVisibleDiv(`sliding-div-1`);
      setActiveLink(link);
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

  return (
    <div>
      <Navbar onLinkClick={handleLinkClick} activeLink={activeLink} setActiveLink={ setActiveLink} />
      <HelloComponent
        visibleDiv={visibleDiv}
        onCloseClick={handleCloseClick}
        onNextClick={handleNextClick}
      />
      {showContactForm && <ContactForm onClose={handleCloseContactForm} />}
      {/* Add other components and content here */}
    </div>
  );
}

export default App;