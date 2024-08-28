import React, { useState } from "react";

const Quez = () => {
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setselectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const questions = [
    "What is the name of the highest mountain in the world?",
    "What is the capital of Egypt?",
    "What is the longest river in Africa?",
    "Who is the inventor of the electric light bulb?",
    "What is the capital of America?",
  ];
  const answers = [
    ["Everest", "Elbert", "Hayes"],
    ["cairo", "Asyot", "Giza"],
    ["Nile rever", "Niger rever", "Congo rever"],
    ["Tomas Edison", "josieph swan", "Hiram Maxim"],
    ["Washington", "london", "Roma"],
  ];
  const rightAnswers = [
    "Everest",
    "cairo",
    "Nile rever",
    "Tomas Edison",
    "Washington",
  ];

  const handleChoose = (index) => {
    if (!isAnswered) {
      setselectedAnswer(index);

      if (
        answers[currentQuestionIndex][index] ===
        rightAnswers[currentQuestionIndex]
      ) {
        setScore((prev) => prev + 1);
      }

      setIsAnswered(true);
    }
  };
  const handleNext = () => {
    if (selectedAnswer !== null) {
      setcurrentQuestionIndex((prev) => prev + 1);
    }
    reset();
  };

  // resrt for the next question
  const reset = () => {
    setselectedAnswer(null);
    setIsAnswered(false);
  };
  // do quez again
  const repeatQuez = () => {
    setcurrentQuestionIndex(0);
    setScore(0);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-[#D8C7FF] to-[#19006c]">
      {currentQuestionIndex < questions.length ? (
        <div className=" w-[500px] bg-white p-4 rounded-sm">
          <h2 className="font-semi text-xl">{`${currentQuestionIndex + 1}. ${
            questions[currentQuestionIndex]
          }`}</h2>
          <ul>
            {answers[currentQuestionIndex].map((answer, index) => {
              let className = "";

              if (isAnswered) {
                // show the write answer after answer
                if (answer === rightAnswers[currentQuestionIndex]) {
                  className = "bg-green-300";
                }
                //  show the answer is true or false
                if (selectedAnswer === index) {
                  if (
                    answers[currentQuestionIndex][index] ===
                    rightAnswers[currentQuestionIndex]
                  ) {
                    className = "bg-green-300";
                  } else {
                    className = "bg-red-300";
                  }
                }
              }
              return (
                <li
                  onClick={() => handleChoose(index)}
                  key={index}
                  className={`cursor-pointer p-2 border-2 my-2 ${className}`}
                >
                  {answer}
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center mt-5">
            <button
              className="py-2 px-16 rounded-sm bg-[#532bd8] text-white"
              onClick={handleNext}
            >
              Next
            </button>
          </div>

          <p className="text-center mt-2 font-semibold">{`question ${
            currentQuestionIndex + 1
          } from ${questions.length}`}</p>

          {/* Show the score after last question */}
        </div>
      ) : (
        <div className="bg-white rounded-sm p-4">
          <h3>
            Your final score is: {score} from {questions.length}
          </h3>
          <div
          onClick={repeatQuez}
           className="flex justify-center rounded-sm py-2 mt-5 text-white bg-[#532bd8]">
            <button >reset</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quez;
