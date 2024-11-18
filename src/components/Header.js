import React from 'react';
import '../assets/css/Header.css';  // Custom CSS

const Header = () => {
  return (
    <header className="header">
  {/* Top Section: Logo + Auth Buttons */}
  <div className="header-top">
    <div className="logo">BOOKING.COM</div>
    <div className="auth-buttons">
      <a href="#">Register</a>
      <a href="#">Sign In</a>
    </div>
  </div>

  {/* Navigation Section */}
  <nav className="nav">
    <a href="#">Home</a>
    <a href="#">Room List</a>
    <a href="#">Booking</a>
    <a href="#">News</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>

  {/* Middle Text Section */}
  <div className="middle-text">
    <h1>Find your next stay</h1>
    <p>Search low prices on hotels, homes and much more..</p>
  </div>

  {/* Search Section */}
  <div className="search-section">
    <input
      type="text"
      className="form-control"
      placeholder="Destination (e.g., Phu Quoc)"
    />
    <input
      type="text"
      className="form-control"
      placeholder="Check-in date — Check-out date"
    />
    <input
      type="text"
      className="form-control"
      placeholder="Guests (e.g. 2 adults, 1 room)"
    />
    <button className="btn btn-primary">Search</button>
  </div>
</header>



  );
};

export default Header;
