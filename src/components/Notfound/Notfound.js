import React from 'react';
import img from './lost.png'
import './Notfound.css'
const Notfound = () => {
    return (
        <div className=" w-100 error-container container">
            <div className="mx-auto ">
            <h1>404</h1>
            <h3 className="error-text"> Page Not Found </h3>
            
            </div>
            <div className="">
                <img src={img} alt="you have lost your way in the internet" />
            </div>
        </div>
    );
};

export default Notfound;