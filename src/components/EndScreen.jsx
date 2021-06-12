import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from "../helpers/QuestionBank";
const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>
        {score} / {Questions.length}
      </h3>
      <button onClick={restartQuiz}>Restatrt Quiz</button>
    </div>
  );
};
export default EndScreen;
