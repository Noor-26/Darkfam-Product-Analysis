import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReviewdata from '../../hooks/useReviewdata';
import HomeReview from '../HomeReview/HomeReview';
import './Home.css'

const Home = () => {
    const [reviews, setreviews] = useReviewdata()
    const [cusReview,setCusReview] = useState([])

    useEffect(() => {
      
        const custos = reviews.filter(review => review.id <=3)
        setCusReview(custos)
    
    }, [reviews])
    
    
    
    

    return (
        <div >

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
           
           <div className="my-5 container ">
               <h3 className="text-center">Customer reviews</h3>
               <div className="row row-cols-1 row-cols-md-3 g-4">
                {

                        cusReview.map(review =><HomeReview key={cusReview.id} data={review}/> )
                     
                }
               </div>
               <div  className=" text-center my-3 w-100">
                   <button className="review-btn"><Link to="/review" className="review-btn-link">See All Reviews</Link></button>
               </div>
           </div>
        </div>
    );
};

export default Home;