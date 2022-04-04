import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const navigate = useNavigate();

  const threeReviews = reviews.slice(0, 3);

  const handleShowAllReviewsButton = () => {
    navigate("/reviews");
  };

  return (
    <div className="container mt-5">
      <section>
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <img
              src="https://images.deliveryhero.io/image/fd-bd/LH/h6f4-listing.jpg?width=400&height=292"
              alt="food_image"
              className="img-fluid rounded-3 w-100"
            />
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="w-75">
              <h1 className="text-info">Hello-Foods</h1>
              <p className="fw-bold text-muted">
                Assalamualaikom. Welcome to our food delivery site. Choose your
                best food and order it.
              </p>
              <button className="btn btn-info">Live Demo</button>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <h3 className="text-center pt-5 pb-2">
          Customer Reviews{" "}
          <span className="badge bg-info">{threeReviews.length}</span>
        </h3>
        <div className="mt-5 row row-cols-1 row-cols-md-3 g-4">
          {threeReviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <div className="text-center my-5">
          <button className="btn btn-info" onClick={handleShowAllReviewsButton}>
            Show All Reviews
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
