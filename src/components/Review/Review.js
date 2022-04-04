import React from 'react';
import useReviewdata from '../../hooks/useReviewdata';
import ReviewCards from '../ReviewCards/ReviewCards';
import './Review.css'
const Review = () => {
    const [reviews, setreviews] = useReviewdata()
    return (
        <div>
            <h1 className="text-center mt-3">All Reviews</h1>
            <div className='container w-100 mx-auto  my-3  mb-5 review-container'>

            {
                reviews.map(review => <ReviewCards data={review}/>)
            }
            </div>
        </div>
    );
};

export default Review;