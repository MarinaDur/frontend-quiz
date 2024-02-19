import { styled } from "styled-components";
import flex from "../ui/Flex";
import QuizHeading from "./QuizHeading";
import QuizSelectQuiz from "./QuizSelectQuiz";

const StyledQuizStart = styled.div`
  flex-direction: column;
  ${flex}
  align-items: normal;
  gap: 4rem;
  height: calc(100vh - 120px);

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    height: auto;
  }
`;

function QuizStart() {
  return (
    <StyledQuizStart>
      <QuizHeading
        element="h1"
        spanText="Welcome to the"
        text="Frontend Quiz!"
        isParagraph={true}
        pText="Pick a subject to get started."
      />
      <QuizSelectQuiz />
    </StyledQuizStart>
  );
}

export default QuizStart;
