import { storyIds, stories } from "@/stories";
import { StyledArticle, StyledH1, StyledText } from "./page.styles";
import { StoryModal } from "./page.components";

type PageParams = { id: string };
type PageProps = { params: PageParams };

export async function generateStaticParams(): Promise<PageParams[]> {
  return Promise.resolve(storyIds.map((id) => ({ id })));
}

export default function Page({ params: { id } }: PageProps) {
  const { name, text } = stories[id];

  return (
    <StoryModal>
      <StyledArticle>
        <StyledH1>{`Post id ${id} by ${name}`}</StyledH1>
        <StyledText>{text}</StyledText>
      </StyledArticle>
    </StoryModal>
  );
}
