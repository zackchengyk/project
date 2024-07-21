"use client";

import styled from "styled-components";

export const StyledErrorWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding-bottom: var(--navbar-height);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  text-align: center;
`;

export const StyledErrorEmoji = styled.div`
  font-size: 4rem;
  line-height: 1;
`;

export const StyledErrorHeader = styled.h1`
  font-family: "Gelica";
  font-weight: 700;
`;
