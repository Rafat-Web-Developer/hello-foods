import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
