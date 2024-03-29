import { styled } from "styled-components";
import Main from "./Main";
import flex from "../ui/Flex";
import { useQuiz } from "../context/QuizContext";

type StyledConMainProps = {
  $isDarkMode: boolean;
};

const StyledConMain = styled.div<StyledConMainProps>`
  min-height: 100vh;
  width: 100%;
  background: ${(props) =>
    `var(--cl-bg-main) ${
      props.$isDarkMode
        ? "url('pattern-background-mobile-dark.svg')"
        : "url('pattern-background-mobile-light.svg')"
    } no-repeat center`};

  ${flex}
  align-items: flex-start;

  @media (min-width: 768px) {
    background: ${(props) =>
      `var(--cl-bg-main) ${
        props.$isDarkMode
          ? "url('pattern-background-tablet-dark.svg')"
          : "url('pattern-background-tablet-light.svg')"
      } no-repeat left top`};
  }
  @media (min-width: 1024px) {
    background: ${(props) =>
      `var(--cl-bg-main) ${
        props.$isDarkMode
          ? "url('pattern-background-desktop-dark.svg')"
          : "url('pattern-background-desktop-light.svg')"
      } no-repeat left top`};
    background-size: cover;
  }
`;

function ConMain() {
  const { isDarkMode } = useQuiz();
  return (
    <StyledConMain $isDarkMode={isDarkMode}>
      <Main />
    </StyledConMain>
  );
}

export default ConMain;
