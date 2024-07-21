import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { Url } from "next/dist/shared/lib/router/router";
import { colors } from "@/styles/colors";
import { useRef } from "react";

const Y = 325;
const X = 100;

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
    animation: ${bounceAnimation} ${Y}ms;
    &.delay-1 {
      animation-delay: ${X * 1}ms;
    }
    &.delay-2 {
      animation-delay: ${X * 2}ms;
    }
    &.delay-3 {
      animation-delay: ${X * 3}ms;
    }
    &.delay-4 {
      animation-delay: ${X * 4}ms;
    }
    &.delay-5 {
      animation-delay: ${X * 5}ms;
    }
  }
`;

export function BouncyLogo({ href }: { href: Url }) {
  const ref0 = useRef<HTMLSpanElement>(null);
  const ref1 = useRef<HTMLSpanElement>(null);
  const ref2 = useRef<HTMLSpanElement>(null);
  const ref3 = useRef<HTMLSpanElement>(null);
  const ref4 = useRef<HTMLSpanElement>(null);
  const ref5 = useRef<HTMLSpanElement>(null);
  const refs = [ref0, ref1, ref2, ref3, ref4, ref5];

  const arr = ["the\u00A0", "school\u00A0", "that\u00A0", "watched\u00A0", "us\u00A0", "grow"];

  return (
    <StyledLink href={href}>
      {arr.map((text, i) => (
        <StyledSpan
          key={i}
          onMouseMove={() => {
            if (!refs[i]?.current) return;
            if (refs[i].current.className) return;
            refs[i].current.className = "bounce";
            let diff = 1;
            while (diff < 6) {
              const plus = refs[i + diff]?.current;
              const minus = refs[i - diff]?.current;
              if (!plus && !minus) break;
              plus && (plus.className = "bounce delay-" + diff);
              minus && (minus.className = "bounce delay-" + diff);
              diff++;
            }
            setTimeout(() => refs.forEach(({ current }) => current && (current.className = "")), Y + diff * X);
          }}
        >
          <span ref={refs[i]}>{text}</span>
        </StyledSpan>
      ))}
    </StyledLink>
  );
}
