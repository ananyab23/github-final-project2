import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing-content">
              <h1 className="landing-title">Welcome to Paradise Nursery</h1>
              <div className="divider"></div>
              <p className="landing-subtitle">Where Green Meets Serenity</p>

              <button className="get-started-btn" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
            <div className="aboutus-container">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
          <ProductList />
        </div>
      )}
    </div>
  );
}

export default App;
