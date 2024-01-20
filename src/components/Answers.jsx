import { useRef } from "react";
import { ANSWER_STATE } from "../constants/enum";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers?.current?.map((answer) => {
        let cssClass = "";
        const isSelected = answer === selectedAnswer;

        if (isSelected && answerState === ANSWER_STATE.ANSWERED) {
          cssClass = "selected";
        }

        if (
          isSelected &&
          (answerState === ANSWER_STATE.CORRECT ||
            answerState === ANSWER_STATE.WRONG)
        ) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              className={cssClass}
              onClick={() => onSelect(answer)}
              disabled={answerState}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
