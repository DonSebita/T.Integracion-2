import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "@/lib/SesionProviders";
import Footbar from "@/components/footbar"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "S&S",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          "grid grid-flow-row auto-rows-max"}
      >
        <NextAuthProvider>
        {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
