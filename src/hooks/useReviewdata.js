import React, { useEffect, useState } from 'react';

const useReviewdata = () => {
    const [reviews, setreviews] = useState([])

    useEffect(() => {
      
        fetch('reviews/review.json')
        .then(res => res.json())
        .then(data => setreviews(data))
    
    }, [])
    return [reviews,setreviews]
};

export default useReviewdata;