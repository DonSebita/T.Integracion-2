import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./Providers";
import Footbar from "@/components/footbar"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Pagina de inicio abogados",
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
          <Footbar/>
        </NextAuthProvider>
      </body>
    </html>
  );
}
