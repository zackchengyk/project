"use client";

import { colors } from "@/styles/colors";
import { HTMLAttributes, useRef } from "react";
import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.25, 0.8, 0.65, 1);
  }
  50% {
    transform: translateY(-.75rem);
    animation-timing-function: cubic-bezier(.35, 0, .75, .2);
  }
  100% {
    transform: translateY(0);
  }
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;

  color: ${colors.text};

  > .bounce {
    animation: ${bounceAnimation} 0.325s infinite;
    animation-delay: var(--delay);
  }
`;

export type BouncyWordProps = { text: string } & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function BouncyWord({ text, ...rest }: BouncyWordProps) {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <StyledSpan
      {...rest}
      onMouseEnter={() => ref.current && (ref.current.className = "bounce")}
      onAnimationIteration={() => ref.current && (ref.current.className = "")}
    >
      <span ref={ref}>{text}</span>
    </StyledSpan>
  );
}
