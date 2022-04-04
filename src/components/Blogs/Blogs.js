import React, { useEffect, useState } from "react";
import Question from "../Question/Question";

const Blogs = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("questions.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <div className="container mt-5">
      {questions.map((question) => (
        <Question singleQuestion={question}></Question>
      ))}
    </div>
  );
};

export default Blogs;
