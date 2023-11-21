import Navbar from "@/components/navbar";
import Footbar from "@/components/footbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Pagina de inicio abogados",
};

export default function Layout({ children }) {
  return (
    <main
      className={"flex flex-col h-auto"}
    >
      <Navbar />
      <div>{children}</div>
      <Footbar />
    </main>
  );
}
