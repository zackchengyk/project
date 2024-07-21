"use client";

import { stories } from "@/stories";
import { Article } from "./Article";
import styled from "styled-components";
import React from "react";

const StyledSection = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */

  max-width: 100ch;
  margin: 0 auto;
`;

export default function Page() {
  const array = [...Object.entries(stories)];

  return (
    <>
      <StyledSection>
        <h1>Stories</h1>

        {array.map(([id, story]) => (
          <Article key={id} {...story} />
        ))}
      </StyledSection>
    </>
  );
}
