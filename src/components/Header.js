import React from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap-icons/font/bootstrap-icons.css';  
import '../assets/css/Header.css';  

const Header = () => {  
    return (  
        <header className="header bg-primary text-white">  
            <div className="container d-flex justify-content-between align-items-center py-2">  
                <div className="d-flex align-items-center">  
                    <div className="h6 mb-0 fw-bold">Booking.com</div>  
                    <a href="/" className="text-white mx-3">Home</a>  
                    <a href="/roomlist" className="text-white mx-3">RoomList</a>  
                    <a href="/booking" className="text-white mx-3">Booking</a>  
                    <a href="/news" className="text-white mx-3">News</a>  
                    <a href="/about" className="text-white mx-3">About</a>  
                    <a href="/contact" className="text-white mx-3">Contact</a>  
                </div>  
                <div className="d-flex align-items-center">  
                    <span className="me-2">VND</span>  
                    <span className="mx-2">|</span>  
                    <a href="/register" className="text-white mx-2">Register</a>  
                    <a href="/login" className="text-white mx-2">Sign in</a>  
                </div>  
            </div>  

            {/* Search Bar Section */}  
            <div className="search-bar py-3">  
                <div className="container">  
                    <div className="d-flex justify-content-center align-items-center">  
                        <div className="input-group me-2">  
                            <input  
                                type="text"  
                                className="form-control"  
                                placeholder="Destination"  
                                aria-label="Destination"  
                                id="destination"  
                            />  
                            <button className="btn btn-outline-secondary" type="button">  
                                <span>&times;</span>  
                            </button>  
                        </div>  
                        <div className="input-group me-2">  
                            <span className="input-group-text">Check-in date</span>  
                            <input type="date" className="form-control" />  
                        </div>  
                        <div className="input-group me-2">  
                            <span className="input-group-text">Check-out date</span>  
                            <input type="date" className="form-control" />  
                        </div>  
                        <div className="input-group me-2">  
                            <span className="input-group-text">Adults</span>  
                            <input type="number" className="form-control" defaultValue="2" />  
                            <span className="input-group-text">Children</span>  
                            <input type="number" className="form-control" defaultValue="0" />  
                            <span className="input-group-text">Rooms</span>  
                            <input type="number" className="form-control" defaultValue="1" />  
                        </div>  
                        <button className="btn btn-primary">Search</button>  
                    </div>  
                </div>  
            </div>  
        </header>  
    );  
};  

export default Header;