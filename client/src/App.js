import React from 'react';
import Navbar from './components/Navbar';
import HelloComponent from './components/HelloComponent'; // Import the HelloComponent

function App() {
  return (
    <div>
      <Navbar />
      <HelloComponent />
      {/* Add other components and content here */}
    </div>
  );
}

export default App;