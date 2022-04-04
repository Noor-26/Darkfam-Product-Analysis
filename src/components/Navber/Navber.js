import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Navber.css'
const Navber = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand navText" href="#">Darkfam</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li className="nav-item">
        <CustomLink to="/review">Review</CustomLink>
        </li>
        <li className="nav-item">
        <CustomLink to="/charts">Dashboard</CustomLink>
        </li>
        <li className="nav-item">
        <CustomLink to="/Blog">Blog</CustomLink>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
    );
};

export default Navber;