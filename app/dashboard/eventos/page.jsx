import FormEventCalendar from "@/components/formEvent";
import Navbar from "@/components/navbar";

export default function Eventos() {
  return (
    <div className="w-auto bg-white">
      <Navbar/> 
      <div className="mx-auto py-16">
        <FormEventCalendar />
      </div>
    </div>
  );
}
