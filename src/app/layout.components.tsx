"use client";

import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

/**
 * A client component which collects all the CSS rules in a render, and appropriately injects them into the HTML
 * via Next's `useServerInsertedHTML` hook. This must be used in the root layout for styled-components to work.
 *
 * The body of this component was taken wholesale from
 * [Next's documentation page on CSS-in-JS](https://nextjs.org/docs/app/building-your-application/styling/css-in-js).
 *
 * For your understanding, please read that page in full.
 */
export function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>;
}
