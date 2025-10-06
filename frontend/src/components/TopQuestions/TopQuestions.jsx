import React, { useCallback, useEffect, useRef } from "react";
import questions from "../../data/topQuestions";
import "./TopQuestions.css";

const TopQuestions = ({ onHover }) => {
  const topTwoQuestions = questions.slice(0, 2);
  const remainingQuestions = questions.slice(2);

  const cardRef = useRef([]); // holds references to all cards

  // Mouse enter callback
  const handleMouseEnter = useCallback(
    (question) => {
      onHover?.(question);
    },
    [onHover]
  );

  useEffect(() => {
  if (cardRef.current.length < questions.length) return;

  let index = 0;
  const interval = setInterval(() => {
    if (!cardRef.current.length) return;

    cardRef.current.forEach((ref) => ref?.classList.remove("hover-effect"));

    const currentCard = cardRef.current[index];
    if (currentCard) {
      currentCard.classList.add("hover-effect");
    }

    const allQuestions = [...topTwoQuestions, ...remainingQuestions];
    const hoveredQuestion = allQuestions[index];
    handleMouseEnter(hoveredQuestion);

    index = (index + 1) % cardRef.current.length;
  }, 2000);

  return () => clearInterval(interval);
}, [handleMouseEnter, questions.length]); // <-- Add questions.length


  return (
    <>
      <div className="first-questions-sec">
        {topTwoQuestions.map((question, i) => (
          <div
            key={`top-${i}`}
            className={`question-card top-${i}`}
            onMouseEnter={() => handleMouseEnter(question)}
            ref={(el) => {
              if (el) {
                cardRef.current[i] = el;
                // console.log(`Assigned ref at index ${i}:`, el);
              }
            }}
          >
            {question}
          </div>
        ))}
      </div>

      <div className="remaining-questions-sec">
        {remainingQuestions.map((question, i) => {
          const globalIndex = i + topTwoQuestions.length;
          return (
            <div
              key={`bottom-${globalIndex}`}
              className={`question-card bottom-${globalIndex}`}
              onMouseEnter={() => handleMouseEnter(question)}
              ref={(el) => {
                if (el) {
                  cardRef.current[globalIndex] = el;
                  // console.log(`Assigned ref at index ${globalIndex}:`, el);
                }
              }}
            >
              {question}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopQuestions;
