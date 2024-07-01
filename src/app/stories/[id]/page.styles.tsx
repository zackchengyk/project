"use client";

import { colors } from "@/styles/colors";
import styled from "styled-components";

export const StyledDialog = styled.dialog`
  position: fixed;
  inset: 0;

  width: 100dvw;
  height: 100dvh;
  max-width: unset;
  max-height: unset;

  border: none;
  background-color: #ffffffee;

  padding: 2rem;

  * {
    margin-bottom: 1rem;
  }
`;

export const StyledArticle = styled.article``;

export const StyledH1 = styled.h1``;

export const StyledText = styled.p`
  max-width: 80ch;
`;
