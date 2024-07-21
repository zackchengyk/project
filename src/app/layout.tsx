import type { Metadata } from "next";
import { StyledComponentsRegistry } from "./layout.components";

import "../styles/fonts.css";
import "../styles/globals.css";
import { Navbar } from "@/components/navbar";
import { StyledGridDiv, StyledMain } from "./layout.styles";

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
        <StyledComponentsRegistry>
          <StyledGridDiv>
            <Navbar />
            <StyledMain>{children}</StyledMain>
          </StyledGridDiv>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
