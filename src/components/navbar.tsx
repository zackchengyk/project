"use client";

import styled from "styled-components";
import Link from "next/link";
import { BouncyLogo } from "./bouncy-logo";
import { BouncyWord } from "./bouncy-word";

const StyledNav = styled.nav`
  user-select: none;

  height: var(--navbar-height);
  width: 100%;
  max-width: 84rem;

  display: flex;
  justify-content: space-between;
  align-items: stretch;

  @media (max-width: 700px) {
    justify-content: center;

    > :first-child {
      display: none;
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;

  font-family: "Gelica";
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
`;

const StyledLink = styled(Link)`
  transition: background-color 0.28s ease-in-out;

  &:hover {
    background-color: #e8d5c1;
    transition: background-color 0.02s ease-in-out;
  }

  &:active {
    background-color: #e8a215;
  }

  display: grid;
  place-items: stretch;

  &:hover {
    text-decoration: underline;
  }
`;

export function Navbar() {
  return (
    <StyledNav>
      <BouncyLogo href="/" />

      <StyledDiv>
        <StyledLink href="/video">
          <BouncyWord text="video" style={{ padding: "0 1rem" }} />
        </StyledLink>
        <StyledLink href="/model">
          <BouncyWord text="model" style={{ padding: "0 1rem" }} />
        </StyledLink>
        <StyledLink href="/stories/browse">
          <BouncyWord text="stories" style={{ padding: "0 1rem" }} />
        </StyledLink>
      </StyledDiv>
    </StyledNav>
  );
}
