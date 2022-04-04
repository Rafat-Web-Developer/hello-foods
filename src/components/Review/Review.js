import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Review = ({ review }) => {
  const { name, description } = review;
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-header">
          <h6>{name}</h6>
        </div>
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
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
