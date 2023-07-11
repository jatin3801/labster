import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";

const inter = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Labster | Virtual Labs for Universities and High Schools",
  description: `Labster empowers educators to reimagine their science courses with immersive online
    simulations. Request a demo to discover how Labster engages students, trains lab skills, and accelerates learning.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
