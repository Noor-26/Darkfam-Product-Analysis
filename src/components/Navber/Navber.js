import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Navber.css'
const Navber = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Darkfam</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li class="nav-item">
        <CustomLink to="/review">Review</CustomLink>
        </li>
        <li class="nav-item">
        <CustomLink to="/charts">Dashboard</CustomLink>
        </li>
        <li class="nav-item">
        <CustomLink to="/Blog">Blog</CustomLink>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
    );
};

export default Navber;