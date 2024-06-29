import type { Metadata } from "next";
import { StyledComponentsRegistry } from "./layout.components";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "The School That Watched Us Grow",
  description: "This site is still under construction. Please bear with us!",
  authors: [
    { name: "Felix Galistan", url: "https://www.felixgalistan.com" },
    { name: "Pearlyn Chang" },
    { name: "Sun Kai Li" },
    { name: "Zack Cheng", url: "https://thisiszack.com" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
