import Register from "@/components/formularios/formRegister";
import Navbar from "@/components/navbar";

export default function page() {
  return (
    <main className="h-full w-full"> 
      <Navbar />
      <div className="grid place-items-center h-screen">
        <Register />
      </div>
    </main>
  );
}
