import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { Url } from "next/dist/shared/lib/router/router";
import { BouncyWord } from "./bouncy-word";

const StyledLink = styled(Link)`
  white-space: nowrap;
  display: flex;
  align-items: stretch;
  padding: 0 1rem;

  font-family: "Gelica";
  font-style: italic;
  font-weight: 600;
  font-size: 1.5rem;

  text-decoration: none !important;
`;

export function BouncyLogo({ href }: { href: Url }) {
  const arr = ["the\u00A0", "school\u00A0", "that\u00A0", "watched\u00A0", "us\u00A0", "grow"];

  return (
    <StyledLink href={href}>
      {arr.map((text) => (
        <BouncyWord key={text} text={text} />
      ))}
    </StyledLink>
  );
}
