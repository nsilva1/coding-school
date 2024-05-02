import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Ndito Coding Institute | About Us",
  description: "World class Coding Institute",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
