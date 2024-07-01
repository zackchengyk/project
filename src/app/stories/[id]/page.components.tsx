"use client";

import { useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef } from "react";
import styled from "styled-components";
import { StyledDialog } from "./page.styles";

const StyledButton = styled.button``;

export function StoryModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const ref = useRef<ElementRef<"dialog">>(null);

  // Show dialog the moment this component appears
  useEffect(() => {
    if (!ref.current?.open) ref.current?.showModal();
  }, []);

  // Navigate back to dismiss
  const dismiss = () => router.back();

  return (
    <StyledDialog ref={ref} onCancel={dismiss}>
      <StyledButton onClick={dismiss}>{"Back"}</StyledButton>
      {children}
    </StyledDialog>
  );
}
