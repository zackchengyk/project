"use client";

import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

export default function Home() {
  return <StyledMain>{"Hello World"}</StyledMain>;
}
