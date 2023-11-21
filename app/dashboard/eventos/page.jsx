import FormEventCalendar from "@/components/formEvent";

export default function Eventos() {
  return (
    <div className="bg-white">
      <div id="toast"></div>
      <div className="mx-auto py-16">
        <FormEventCalendar />
      </div>
    </div>
  );
}
