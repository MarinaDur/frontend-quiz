import { styled } from "styled-components";
import Quiz from "./Quiz";
import flex from "../ui/Flex";
import Header from "./Header";

const StyledMain = styled.div`
  width: 90%;
  ${flex}
  flex-direction: column;
  max-width: 1160px;

  @media (min-width: 768px) {
    width: 85%;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-rows: auto auto;
    justify-content: stretch;
    min-height: 100vh;
    align-items: start;
  }
`;

function Main() {
  return (
    <StyledMain>
      <Header />
      <Quiz />
    </StyledMain>
  );
}

export default Main;
