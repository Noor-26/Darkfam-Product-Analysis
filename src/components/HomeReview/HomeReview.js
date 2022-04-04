import React from 'react';

const HomeReview = (props) => {
    const {review,name,ratings} = props.data
    return (
            <div className="col">
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title text-center">Name : {name}</h5>
        <p className="card-text">{review}</p>

      </div>
        <p className="mt-3 ps-3">Ratings: {ratings} </p>
    </div>
  </div>
      
    );
};

export default HomeReview;