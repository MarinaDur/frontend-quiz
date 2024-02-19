import { styled } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import flex from "../ui/Flex";
import QuizHeading from "./QuizHeading";
import FinalScore from "./FinalScore";
import Button from "../ui/Button";
import { useQuiz } from "../context/QuizContext";
import { useEffect, useRef } from "react";

const StyledResults = styled.div`
  ${flex}
  flex-direction: column;
  height: calc(100vh - 72px);
  gap: 4rem;
  width: 100%;
  align-items: flex-start;
  @media (min-width: 1024px) {
    flex-direction: row;
    height: auto;
  }
`;
const StyledCon = styled.div`
  width: 100%;
  ${flex}
  flex-direction:column;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 3.2rem;
  }

  @media (min-width: 1024px) {
    width: 45%;
  }
  @media (min-width: 1280px) {
    width: 50%;
  }
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
`;

function ResultsPage() {
  const { handlePlayAgain, handleKeyPlayAgain } = useQuiz();
  const btnPlayAgain = useRef<HTMLButtonElement>(null);
  const nav = useNavigate();

  useEffect(() => {
    if (btnPlayAgain.current) {
      btnPlayAgain.current.focus();
    }
  }, []);

  return (
    <StyledResults>
      <QuizHeading
        element="h3"
        spanText="Quiz completed"
        text="You scored..."
        isParagraph={false}
      />
      <StyledCon>
        <FinalScore />
        <StyledNavLink to="/">
          <Button
            ref={btnPlayAgain}
            handleClick={handlePlayAgain}
            handleKeyDown={(e) => handleKeyPlayAgain(e, nav)}
          >
            Play Again
          </Button>
        </StyledNavLink>
      </StyledCon>
    </StyledResults>
  );
}

export default ResultsPage;
