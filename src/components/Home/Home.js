import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className="container row row-cols-1 row-cols-md-2 mx-auto g-4">
            <div className="text-container col p-2 my-auto">
                <h1 className="p-3 text-center">Satoru Gojo Jujutsu <br/> Kaisen Anime</h1>
                <p className="p-3">In this Corona pandemic where wearing mask is a must some of the weebs wants there mask to be on there favourite anime character.This mask is from jujutsu Kaisen,an popular anime series.</p>
                <button className="py-3 px-4 ms-3 home-btn">Live demo</button>
            </div>
            <div className="image-container col p-2">
                <img src="https://static-01.daraz.com.bd/p/eeb10e4cb6abff53d6af72d177b575fe.jpg" className = "img-fluid"alt="" />
            </div>
        </div>
    );
};

export default Home;