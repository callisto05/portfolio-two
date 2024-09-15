import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HelloComponent from './components/HelloComponent';

function App() {
  const [visibleDiv, setVisibleDiv] = useState(null);

  const handleAboutClick = () => {
    setVisibleDiv('sliding-div-1');
  };

  const handleCloseClick = () => {
    setVisibleDiv(null);
  };

  const handleNextClick = (nextDivId) => {
    setVisibleDiv(nextDivId);
  };

  return (
    <div>
      <Navbar onAboutClick={handleAboutClick} />
      <HelloComponent
        visibleDiv={visibleDiv}
        onCloseClick={handleCloseClick}
        onNextClick={handleNextClick}
      />
      {/* Add other components and content here */}
    </div>
  );
}

export default App;