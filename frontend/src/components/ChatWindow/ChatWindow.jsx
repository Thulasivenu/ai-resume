import React, { useRef, useState, useEffect } from "react";
import "./ChatWindow.css";
import TopQuestions from "../TopQuestions/TopQuestions";
import sendIconDisabled from "../../assets/images/sendDisabled.svg";
import AiSparkle from "../../assets/images/light_theme/ai_sparkle_icon.svg";
import resume_data from "../../data/resume.json";
const ChatWindow = () => {
  document.title = "Thulasi V | Resume Chat";

 useEffect(() => {
  console.log(resume_data);
}, []); // empty dependency → runs only once on mount


  const [textArea, setTextArea] = useState("");
  const textRef = useRef(null);

  const handleInputHeight = (e) => {
    setTextArea(e.target.value);
    textRef.current.style.height = "55px";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };

  //placeholder typewriter
  const [questionsHovered, setQuestionsHovered] = useState("");
  const [displayedPlaceholder, setDisplayedPlaceholder] = useState("");

  useEffect(() => {
    if (!questionsHovered) return;

    setDisplayedPlaceholder("");
    let i = 0;

    let totalChars = questionsHovered.length;
    let hoveredDurationGiven = 2000; // for top 5 questions cards
    let speedOfEachChar = totalChars / hoveredDurationGiven;

    const interval = setInterval(() => {
      if (i <= questionsHovered.length) {
        setDisplayedPlaceholder(questionsHovered.substring(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speedOfEachChar);
    return () => clearInterval(interval);
  }, [questionsHovered]);

  return (
    <>
      <div className="chat-window-container">
        <div className="chat-window-sections">
          <div className="chat-input-question">
            <div className="top_headings">
              {/* <h1>Ask me,</h1>
              <h1>About My Resume</h1> */}
              <img src={AiSparkle} alt="" width="16px" />
              <h2>Ask me About My Resume</h2>
            </div>
            <textarea
              ref={textRef}
              className="chat-interface-textarea"
              placeholder={displayedPlaceholder}
              value={textArea}
              onChange={handleInputHeight}
            />
            <button className="askBtn">
              <img src={sendIconDisabled} alt="Send Icon" width="18px" />
            </button>
          </div>
          <div className="top-questions-section">
            <TopQuestions onHover={setQuestionsHovered} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWindow;
