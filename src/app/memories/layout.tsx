import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memories",
  description: "This site is still under construction. Please bear with us!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>{children} </>
  );
}
