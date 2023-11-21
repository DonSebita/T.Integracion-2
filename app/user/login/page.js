import Login from "@/components/formularios/formLogin";
import Navbar from "@/components/navbar";

export default function page() {
  return (
    <main className="w-full h-full">
      <Navbar/>
      <div className="flex items-center justify-center h-screen w-full">
       <Login className="w-1/4"/>
       </div>
    </main>
  );
}
