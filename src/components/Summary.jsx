import React from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../constants/questions";

const Summary = ({ userAnswers }) => {
    //   const skippedAnswerCount = userAnswers.reduce(
    //     (count, answer) => (answer === null ? count + 1 : count),
    //     0
    //   );
  const {correctAnswerCount, skippedAnswerCount} = userAnswers.reduce(
    (count, answer, index) => {
      const correctAnswer = QUESTIONS[index].answers[0];
      if (answer === correctAnswer) count.correctAnswerCount++;
      else if (answer === null) count.skippedAnswerCount++;
      return count;
    },
    { correctAnswerCount: 0, skippedAnswerCount: 0 }
  );
  const skippedPercentage = Math.round(
    (skippedAnswerCount * 100) / userAnswers.length
  );
  const correctPercentage = Math.round(
    (correctAnswerCount * 100) / userAnswers.length
  );
  const wrongPercentage = 100 - (skippedPercentage + correctPercentage);
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">skipped </span>
        </p>
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongPercentage}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers?.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={QUESTIONS[index]}>
              <h3>{index + 1}</h3>
              <p className="QUESTIONS[index]">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
