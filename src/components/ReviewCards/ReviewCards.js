import React from 'react';
import './ReviewCards.css'
const ReviewCards = (props) => {
    const {id} = props.data
    return (
        <div className=" review-card ">
            <h1>{id}</h1>
        </div>
    );
};

export default ReviewCards;