import React, { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("START INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);
    return () => {
      console.log("STOP INTERVAL");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("START TIMER");
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      console.log("STOP TIMER");
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
};

export default QuestionTimer;
