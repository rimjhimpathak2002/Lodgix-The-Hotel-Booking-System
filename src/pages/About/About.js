import React from 'react';
import './About.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useNavigate } from 'react-router-dom';
// import Screenshot from "./public/Screenshot735.png";
const AboutUs = () => {
  const navigate = useNavigate();

  const handleExploreAmenities = () => {
    navigate('/Amenities'); // Navigate to the amenities section
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className="about-us">
        <div className="about-container">
          <div className="about-content">
            <h2>Welcome to Lodgix</h2>
            <p>
              At Lodgix, we believe in making your travel dreams a reality. Our mission is to provide you with the best hotel booking experience, ensuring that you find the perfect stay tailored to your needs.
            </p>
            <h2>Our Story</h2>
            <p>
              Founded in [Year], Lodgix was created with the vision of simplifying the hotel booking process. With a commitment to quality and customer satisfaction, we have partnered with a diverse range of hotels across India to offer you unmatched options and prices.
            </p>
            <h2>Why Choose Us?</h2>
            <ul>
              <li>🌟 Wide Selection of Hotels</li>
              <li>🌍 User-Friendly Interface</li>
              <li>🛡️ Secure Booking Process</li>
              <li>💬 24/7 Customer Support</li>
              <li>🛏️ Best Price Guarantee</li>
            </ul>
            <h2>Join Us on Your Next Adventure</h2>
            <p>
              Whether you are traveling for business or leisure, Lodgix is here to assist you every step of the way. Explore our website to find amazing hotel deals and make your booking today!
            </p>
            <button className="explore-amenities-btn" onClick={handleExploreAmenities}>
              Explore Amenities
            </button>
          </div>
          <img
            src="/Screenshot (735).png"
           alt="Hotel"
            className="about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


