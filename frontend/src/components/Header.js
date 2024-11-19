import React from 'react';
import { Link } from 'react-router-dom'; // Dùng Link thay cho thẻ <a>
import '../assets/css/Header.css'; // Custom CSS

const Header = () => {
  return (
    <header className="header">
      {/* Top Section: Logo + Auth Buttons */}
      <div className="header-top">
        <div className="logo">
          <Link to="/">
            <i className="bi bi-house-door-fill"></i> {/* Icon nhà */}
            BOOKING.COM
          </Link>
        </div>
        <div className="auth-buttons">
          <Link to="/register">
            <i className="bi bi-person-plus"></i> {/* Icon đăng ký */}
            Register
          </Link>
          <Link to="/login">
            <i className="bi bi-box-arrow-in-right"></i> {/* Icon đăng nhập */}
            Sign In
          </Link>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="nav">
        <Link to="/"><i className="bi bi-house"></i> Home</Link>
        <Link to="/room-list"><i className="bi bi-list-ul"></i> Room List</Link>
        <Link to="/booking"><i className="bi bi-calendar-check"></i> Booking</Link>
        <Link to="/news"><i className="bi bi-newspaper"></i> News</Link>
        <Link to="/about"><i className="bi bi-info-circle"></i> About</Link>
        <Link to="/contact"><i className="bi bi-envelope"></i> Contact</Link>
      </nav>

      {/* Middle Text Section */}
      <div className="middle-text">
        <p><i className="bi bi-search"></i> Find your next stay</p>
        <p>Search low prices on hotels, homes and much more...</p>
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
        <button className="btn btn-primary">
          <i className="bi bi-search"></i> Search
        </button>
      </div>
    </header>
  );
};

export default Header;
