import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Navber.css'
const Navber = () => {
    return (
        <nav className="navber container">
            <div>
                <h2>Darkfam</h2>
            </div>
            <div className="links">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/review">Review</CustomLink>
            <CustomLink to="/charts">Dasahboard</CustomLink>
            </div>
            

        </nav>
    );
};

export default Navber;