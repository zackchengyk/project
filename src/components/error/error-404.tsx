import Link from "next/link";
import { StyledErrorEmoji, StyledErrorHeader, StyledErrorWrapper } from "./shared";

export function Error404() {
  return (
    <StyledErrorWrapper>
      <StyledErrorEmoji>{"👀"}</StyledErrorEmoji>

      <StyledErrorHeader>{"Page not found."}</StyledErrorHeader>

      <p>
        {"We didn't find anything at this URL."}
        <br />
        {"Please "}
        <Link href={"mailto:hello.vjdocu@gmail.com"}>{"let us know"}</Link>
        {" if you think this is an error!"}
      </p>
    </StyledErrorWrapper>
  );
}
