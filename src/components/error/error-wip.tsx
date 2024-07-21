import Link from "next/link";
import { StyledErrorEmoji, StyledErrorHeader, StyledErrorWrapper } from "./shared";

export function ErrorWip() {
  return (
    <StyledErrorWrapper>
      <StyledErrorEmoji>{"🚧"}</StyledErrorEmoji>

      <StyledErrorHeader>{"Oops, you got us!"}</StyledErrorHeader>

      <p>
        {"This page is a work in progress. Please check back later! 🙏"}
        <br />
        {"In the meantime, why don't you\u00A0"}
        <Link href={"https://forms.gle/2u2bY3HmJs2cCo4r9"}>{"submit a story"}</Link>
        {"?"}
      </p>
    </StyledErrorWrapper>
  );
}
