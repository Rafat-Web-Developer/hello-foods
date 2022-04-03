import React from "react";

const Home = () => {
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
              <h1>Hello-Foods</h1>
              <p>
                This is a food delivery website. This is a food delivery
                website. This is a food delivery website. This is a food
                delivery website.
              </p>
              <button className="btn btn-info">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
