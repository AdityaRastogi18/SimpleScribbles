import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simple Scribbles",
  description: "A personal blogging website",
  icons: {
    icon: "/images/logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark:bg-regal-black dark:text-white mx-2 md:mx-[5rem] min-h-screen flex flex-col flex-grow-1`}
      >
        <Navbar />
        <main className="min-h-[75vh] md:min-h-[80vh] lg:min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
