import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Armando's Portfolio",
  description: "Armando Terrazas's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
