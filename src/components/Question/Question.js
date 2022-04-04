import React from "react";

const Question = ({ singleQuestion }) => {
  const { question, answer } = singleQuestion;
  return (
    <div className="card my-5">
      <div className="card-header bg-dark text-info">
        <h6>{question}</h6>
      </div>
      <div className="card-body">
        <p className="fw-bold">{answer}</p>
      </div>
    </div>
  );
};

export default Question;
