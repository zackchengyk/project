import { StoryData } from "@/stories";
import { colors } from "@/styles/colors";
import styled from "styled-components";

const DEFAULT_NAME = "Anonymous";
const DEFAULT_LOCATION = "Unspecified Location";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1.65rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${colors.text};
`;

const StyledBoldText = styled.p`
  font-size: 1rem;
  font-weight: 650;
`;

const StyledText = styled.p`
  font-size: 1rem;
`;

export function Article({ name, classOrStaff, text, location }: StoryData) {
  const who = `${name ?? DEFAULT_NAME} (${classOrStaff})`;
  const where = location?.toLocaleLowerCase() ?? DEFAULT_LOCATION;
  const what = text;

  return (
    <StyledArticle>
      <StyledBoldText>{`< ${where} >`}</StyledBoldText>

      <StyledText>{what}</StyledText>

      <StyledText>{`- ${who}`}</StyledText>
    </StyledArticle>
  );
}
