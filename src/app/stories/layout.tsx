"use client";

import { storyIds } from "@/stories";
import Link from "next/link";
import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 2rem;
`;

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StyledMain>
        <h1>{"Hello World"}</h1>
        <ul>
          {storyIds.map((id) => (
            <li key={id}>
              <Link href={`/stories/${id}`}>{`Story id: ${id}`}</Link>
            </li>
          ))}
        </ul>
      </StyledMain>

      {children}
    </>
  );
}
