"use client";

import styled from "styled-components";

export const StyledGridDiv = styled.div`
  height: 100%;

  display: grid;
  grid-template:
    "navbar" min-content
    "content" minmax(0, 1fr) / minmax(0, 1fr);
  place-items: stretch center;
`;

export const StyledMain = styled.main`
  height: 100%;
  width: 100%;

  padding: 2rem;

  overflow-y: scroll;
`;
