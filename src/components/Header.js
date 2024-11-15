// src/components/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Kết nối với Bootstrap
import '../assets/css/Header.css';  // Import CSS cho Header

const Header = () => {
    return (
        <header className="sticky-top bg-success py-3">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    {/* Logo */}
                    <a className="navbar-brand text-white" href="/">
                        Hotel Booking
                    </a>

                    {/* Menu Toggle Button for Mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation Links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/room-list">Room List</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/booking">Booking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/news">News</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
