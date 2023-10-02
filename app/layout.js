import "./globals.css";
import Navbar from "@/components/navbar";
import Footbar from "@/components/footbar";
import { Inter } from "next/font/google";

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
        <Navbar />
        {children}
        <Footbar />
      </body>
    </html>
  );
}
