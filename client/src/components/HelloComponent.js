import React from 'react';
import '../styles/HelloComponent.css'; // Import the custom CSS file

const HelloComponent = () => {
  return (
    <div className="hello-container">
      <h1>Hello, I'm</h1>
      <h2>Prathamesh Bhosale</h2>
      <div className="line"></div>
      <p>Software Engineer | Developer in Broadridge</p>
      <button className="custom-button">learn more &#x2193;</button> 
    </div>
  );
};

export default HelloComponent;