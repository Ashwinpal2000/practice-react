import "../../App.css"
import React, { useState } from "react";
import Data from "./Data";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [show, setShow] = useState(false);

    const handleAnswerOptionClick = (answer) => {
        if (answer === Data[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < Data.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            console.log("You have completed the quiz! Your score is " + score + " out of " + Data.length);
            setShow(true);
        }
    };

    return (
        <div className="quiz">
            <h2>{Data[currentQuestion].question}</h2>
            {Data[currentQuestion].options.map((option) => (
                <button  key={option} onClick={() => handleAnswerOptionClick(option)}>
                    {option}
                </button>
            ))}
           {
                show?<h3>You have completed the quiz! Your score is {score} out of {Data.length}</h3>:<p></p>
            }
            
        </div>
    );
}

export default Quiz;
