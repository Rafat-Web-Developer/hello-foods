import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Reviews = () => {
  return (
    <div className="container mt-5">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <div className="card-header">
              <h6>Name</h6>
            </div>
            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-info"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-info"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-info"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-info"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faStarHalfAlt}
                  className="text-info"
                ></FontAwesomeIcon>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
