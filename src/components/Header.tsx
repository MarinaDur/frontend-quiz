import { styled } from "styled-components";
import ColorTheme from "./ColorTheme";
import flex from "../ui/Flex";
import QuizIconName from "../ui/QuizIconName";

const StyledHeader = styled.header`
  width: 100%;
  height: 7.2rem;
  ${flex}
  justify-content: space-between;
  padding: 2.5rem 0 0;

  @media (min-width: 1024px) {
    height: 8.5rem;
    align-self: center;
    padding: 0;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <QuizIconName
        name="Accessibility"
        iconName="accessibility"
        cl="--cl-Accessibility"
      />
      <ColorTheme />
    </StyledHeader>
  );
}

export default Header;
