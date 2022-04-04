import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Review = ({ review }) => {
  const { name, description } = review;
  return (
    <div class="col">
      <div class="card h-100">
        <div className="card-header">
          <h6>{name}</h6>
        </div>
        <div class="card-body">
          <p class="card-text">{description}</p>
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
  );
};

export default Review;
