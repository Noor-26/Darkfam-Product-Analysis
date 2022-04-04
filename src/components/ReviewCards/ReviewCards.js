import React from 'react';
import './ReviewCards.css'
const ReviewCards = (props) => {
    const {review,name,ratings} = props.data

    return (
        <div className=" review-card p-3 ">
            <h4 className="text-center">Name : {name}</h4>
            <p>{review}</p>
            <p>Ratings : {ratings}</p>
        </div>
    );
};

export default ReviewCards;