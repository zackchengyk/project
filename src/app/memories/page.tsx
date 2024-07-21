"use client";

import { stories } from "@/stories";
import styled, { keyframes } from "styled-components";

const FullScreenDiv = styled.div`
  position: fixed;
  inset: 0;
  background-color: #000000aa;
`;

const scrollAnimation = ($chWidth: number) => keyframes`
  from {
    transform: translateX(${$chWidth}ch);
  }
  to {
    transform: translateX(-100%);
  }
`;

const ScrollingTextOuter = styled.div<{ $chWidth: number }>`
  position: absolute;

  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  line-height: 1.5;
  white-space: nowrap;

  width: ${(props) => props.$chWidth}ch;
  height: 2.5rem;
  padding: 0.5rem 0 0.5rem;

  background-color: #00000022;

  display: grid;
  place-items: center start;

  overflow: hidden;
`;

const ScrollingTextInner = styled.span<{ $chWidth: number; $chCount: number }>`
  background-color: #ffffff44;

  animation-name: ${(props) => scrollAnimation(props.$chWidth)};
  animation-duration: ${(props) => ((props.$chCount + props.$chWidth) / 5).toFixed(3) + "s" || "unset"};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const TEXT_1 = "lorem ipsum dolor";

const TEXT_2 =
  "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyways. Because bees don't care what humans think is impossible.";

const reduceWhitespaces = (x: string) => x.trim().replace(/\s+/g, " ");

function ScrollingText({
  text,
  chWidth,
  top,
  left,
}: {
  text: string;
  chWidth: number;
  top: React.CSSProperties["top"];
  left: React.CSSProperties["left"];
}) {
  const clean = reduceWhitespaces(text);

  return (
    <ScrollingTextOuter $chWidth={chWidth} style={{ top, left }}>
      <ScrollingTextInner $chWidth={chWidth} $chCount={clean.length}>
        {clean}
      </ScrollingTextInner>
    </ScrollingTextOuter>
  );
}

export default function Page() {
  return (
    <FullScreenDiv>
      <ScrollingText text={TEXT_1} chWidth={20} top="10%" left="10%" />
      <ScrollingText text={TEXT_2} chWidth={15} top="20%" left="25%" />
    </FullScreenDiv>
  );
}
