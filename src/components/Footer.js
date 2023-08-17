import React, { useEffect, useState } from "react";

import Accordian from "./Accordian";

const Footer = () => {
  const [questions, setQuestions] = useState([]); // Changed variable name to 'questions'

  useEffect(() => {
    const apiUrl = "http://localhost:3000/question.json";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.questions);
        setQuestions(data.questions); // Updated to 'questions'
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-black h-[180px] w-[100%]  flex flex-col items-center">
      <div className="text-white text-3xl font-bold p-2 pb-4">FAQ</div>

      {questions.map((item, index) => (
        <Accordian
          item={item}
        />
      ))}

      <hr />
    </div>
  );
};

export default Footer;
