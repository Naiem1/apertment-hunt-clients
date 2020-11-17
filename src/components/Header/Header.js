import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.scss';
import logo from '../../siteImages/logos/Logo.png';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div className="container">
                <Link to="/"><a class="navbar-brand" href="#"><img src={logo} alt="logo"/></a></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link to="/"><a class="nav-link" href="#home">Home</a></Link>
                        </li>
                        <li class="nav-item ml-3">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item ml-3">
                            <a class="nav-link" href="#service">Service</a>
                        </li>
                        <li class="nav-item ml-3">
                            <a class="nav-link" href="#concerns">Concerns</a>
                        </li>
                        <li class="nav-item ml-3">
                            <a class="nav-link" href="#event">Event</a>
                        </li>
                        <li class="nav-item ml-3">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                        <li class="nav-item ml-3">
                            <Link to="/login"><button className="btn btn-main text-white">Login</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;