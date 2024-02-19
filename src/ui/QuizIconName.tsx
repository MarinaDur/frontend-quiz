import { styled } from "styled-components";
import smallCon from "./SmallCon";
import selectionText from "./SelectionText";
import flex from "./Flex";
import Paragraph from "./Paragraph";

type ImageMappingProps = {
  HTML: string;
  CSS: string;
  JavaScript: string;
  Accessibility: string;
};

interface QuizIconNameProps {
  name: string | undefined;
  cl: string | undefined;
  iconName: string | keyof ImageMappingProps | undefined;
}

interface StyledImgConProps {
  $cl: string;
  $iconName: string | keyof ImageMappingProps | undefined;
}

const StyledQuizIconName = styled.div`
  ${flex}
  gap: 1.6rem;
`;

const StyledImgCon = styled.div<StyledImgConProps>`
  ${smallCon}
  background-color: ${(props) => props.$cl && `var(${props.$cl})`};
  background-image: ${(props) =>
    props.$iconName && `url("/icon-${props.$iconName}.svg")`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 2.9rem;
`;

const StyledText = styled.h3`
  ${selectionText}
`;

function QuizIconName({ name, iconName, cl }: QuizIconNameProps) {
  if (iconName === undefined || name === undefined || cl === undefined) {
    return <Paragraph>Image is unavailble</Paragraph>;
  }

  return (
    <StyledQuizIconName>
      <StyledImgCon
        $iconName={iconName as string | keyof ImageMappingProps | undefined}
        $cl={cl}
      />
      <StyledText>{name}</StyledText>
    </StyledQuizIconName>
  );
}

export default QuizIconName;
