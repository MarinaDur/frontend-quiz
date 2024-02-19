import { styled } from "styled-components";
import { useEffect, useRef } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import flex from "../ui/Flex";
import Questions from "./Questions";
import Answers from "./Answers";
import data from "../data/data.json";
import { useQuiz } from "../context/QuizContext";
import Error from "./Error";

const StyledQuizQuestionsAnswers = styled.div`
  ${flex}
  flex-direction: column;
  height: calc(100vh - 72px);
  gap: 1.5rem;

  @media (min-width: 768px) {
    gap: 3.2rem;
  }
  @media (min-width: 1024px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    height: auto;
  }
`;

const StyledBtnCon = styled.div`
  width: 100%;
  grid-column: 2/3;
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
`;

function QuizQuestionsAnswers() {
  const {
    checkAnswer,
    nextQuestion,
    handleNextQuestion,
    qNumber,
    error,
    keyNextBtn,
    handleKeyResults,
  } = useQuiz();

  const { type, id } = useParams();
  const { quizzes } = data;
  const currentQuiz = quizzes.find((q) => q.title === type);
  const questions = currentQuiz?.questions[id ? Number(id) - 1 : 0];
  const question = questions?.question;
  const answers = questions?.options;
  const correctAnswer = questions?.answer;
  const idNum = Number(id) - 1 ? Number(id) - 1 : 0;
  const isAnsweredQuestion = nextQuestion.includes(idNum);
  const nav = useNavigate();

  const btnNextRef = useRef<HTMLButtonElement>(null);
  const btnCheckScoretRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (btnNextRef.current && isAnsweredQuestion) {
      btnNextRef.current.focus();
    } else if (btnCheckScoretRef.current) {
      btnCheckScoretRef.current.focus();
    }
  }, [isAnsweredQuestion, id]);

  return (
    <StyledQuizQuestionsAnswers>
      <Questions question={question} id={id} />
      <Answers
        answers={answers}
        correctAnswer={correctAnswer}
        id={idNum}
        isAnsweredQuestion={isAnsweredQuestion}
      />
      {
        <StyledBtnCon>
          {!isAnsweredQuestion ? (
            <Button handleClick={() => checkAnswer(correctAnswer, idNum)}>
              Submit Answer
            </Button>
          ) : Number(id) < 10 ? (
            <StyledNavLink to={`/quiz/${type}/question/${qNumber}`}>
              <Button
                ref={btnNextRef}
                handleClick={() => handleNextQuestion()}
                handleKeyDown={(e) => keyNextBtn(e, nav, type)}
              >
                Next Question
              </Button>
            </StyledNavLink>
          ) : (
            <StyledNavLink to={`/quiz/${type}/results`}>
              <Button
                ref={btnCheckScoretRef}
                handleKeyDown={(e) => handleKeyResults(e, type, nav)}
                cl="scores"
              >
                Check Your Score
              </Button>
            </StyledNavLink>
          )}
        </StyledBtnCon>
      }
      {error && <Error />}
    </StyledQuizQuestionsAnswers>
  );
}

export default QuizQuestionsAnswers;
