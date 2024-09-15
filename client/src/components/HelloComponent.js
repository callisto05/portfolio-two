import React from 'react';
import '../styles/HelloComponent.css'; // Import the custom CSS file

const HelloComponent = ({ visibleDiv, onCloseClick, onNextClick }) => {
  return (
    <div className="hello-container">
      <h1>Hello, I'm</h1>
      <h2>Prathamesh Bhosale</h2>
      <div className="line"></div> {/* New div for the line */}
      <p>Software Engineer | Developer in Broadridge</p> {/* Example paragraph */}
      <button className="custom-button" onClick={() => onNextClick('sliding-div-1')}>
        Learn More
      </button>
      {visibleDiv === 'sliding-div-1' && (
        <div className="sliding-div" id="sliding-div-1">
          <button className="close-button" onClick={onCloseClick}>
            &times;
          </button>
          <div className="text-container">
            <h1>Capital Markets Software Engineer</h1>
            <p>I am a skilled and dedicated professional with a strong background in capital markets and expertise in developing and implementing various protocols, internal testing frameworks, and automation solutions. With three years of experience in the industry, I have gained comprehensive knowledge of fix and non-fix protocols, as well as proficiency in Java and C++ application development.</p>
            <button className="next-button" onClick={() => onNextClick('sliding-div-2')}>&#x2192;</button>
          </div>
        </div>
      )}

      {visibleDiv === 'sliding-div-2' && (
        <div className="sliding-div" id="sliding-div-2">
          <button className="close-button" onClick={onCloseClick}>
            &times;
          </button>
          <div className="text-container">
            <h1>C++ Application Development</h1>
            <p>Currently, I work as a C++ app developer, focusing on creating an application that tests the market data of capital markets. In this role, I have the opportunity to directly contribute to ensuring the accuracy and reliability of market data by developing robust and efficient testing solutions.</p>
            <button className="next-button" onClick={() => onNextClick('sliding-div-3')}>&#x2192;</button>
          </div>
        </div>
      )}

      {visibleDiv === 'sliding-div-3' && (
        <div className="sliding-div" id="sliding-div-3">
          <button className="close-button" onClick={onCloseClick}>
            &times;
          </button>
          <div className="text-container">
            <h1>Testing Framework and Automation</h1>
            <p>Throughout my career, I have successfully contributed to the development of internal testing frameworks using Java, allowing for efficient and reliable testing processes. Additionally, I have been involved in automation projects, leveraging my programming skills to streamline testing procedures and enhance overall efficiency.</p>
            <button className="next-button" onClick={() => onNextClick('sliding-div-4')}>&#x2192;</button>
          </div>
        </div>
      )}
      
      {visibleDiv === 'sliding-div-4' && (
        <div className="sliding-div" id="sliding-div-4">
          <button className="close-button" onClick={onCloseClick}>
            &times;
          </button>
          <div className="text-container">
            <h1>App-Driven Testing Framework</h1>
            <p>One of my notable achievements includes designing and implementing an app-driven testing framework, which enabled thorough and systematic testing of capital market applications. This framework significantly reduced testing time and improved the quality of software releases.</p>
            <button className="next-button" onClick={() => onNextClick('sliding-div-1')}>&#x2192;</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default HelloComponent;