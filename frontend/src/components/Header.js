import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Thêm CSS cho DatePicker
import { FaSearch } from 'react-icons/fa'; // Sử dụng icon tìm kiếm từ react-icons
import '../assets/css/Header.css'; // Custom CSS

const Header = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1); // Mặc định 1 khách
  const [rooms, setRooms] = useState(1);   // Mặc định 1 phòng

  // Hàm xử lý sự kiện khi tìm kiếm
  const handleSearch = () => {
    console.log('Searching for:', { startDate, endDate, guests, rooms });
  };

  // Hàm xử lý khi chọn ngày check-in
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

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
        
         {/* Destination */}
         <div className="input-container">
          <label>Destination</label>
          <input
            type="text"
            className="form-control"
            placeholder="Destination (e.g., Phu Quoc)"
          />
        </div>

        {/* Chọn ngày check-in và check-out chung một ô */}
        <div className="date-picker-container">
          <label>Select Date</label> {/* Dòng ngắn hơn cho Check-in/Check-out */}
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat="dd/MM/yyyy"
            className="form-control"
            minDate={new Date()} // Ngày tối thiểu có thể chọn là ngày hiện tại
            placeholderText="Select Dates"
          />
        </div>
        {/* Số người và số phòng */}
        <div className="guests-room-container">
          <div className="input-container">
            <label>Guests</label>
            <input
              type="number"
              className="form-control"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
            />
          </div>
          <div className="input-container">
            <label>Rooms</label>
            <input
              type="number"
              className="form-control"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              min="1"
            />
          </div>
        </div>

       

        <button className="btn btn-primary" onClick={handleSearch}>
          <FaSearch /> Search
        </button>
      </div>
    </header>
  );
};

export default Header;
