import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export const metadata = {
  title: "Armando Terrazas Gómez: Web and iOS Developer | Portfolio and Skills",
  description: "Welcome to my portfolio. I'm Armando Terrazas, a web and iOS developer who showcases my projects and skills. See my work and connect with me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
