"use client";
import React from "react";
import MyCalendar from "@/components/MyCalendar";
import Usuarios from "@/components/usuarios";
import Navbar from "@/components/navbar";
const events = [
  {
    start: new Date(),
    end: new Date(new Date().setHours(new Date().getHours() + 1)),
    title: "Evento de ejemplo",
  },
  // Agrega más eventos si es necesario
];

const CalendarPage = () => {
  return (
    <main className="h-auto bg-gray-100">
      <Navbar/> 
      <div className="flex flex-row">
        <div className="lg:w-2/5 bg-indigo-400 p-6">
          <h1 className="text-3xl mb-4 font-semibold text-white">Calendario</h1>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <MyCalendar events={events} />
          </div>
        </div>
        <div className="flex self-center flex-col h-full lg:w-3/5 bg-teal-400 p-6">
          <h1 className="text-3xl mb-4 font-semibold text-white">
            Lista de Usuarios
          </h1>
          <div className=" bg-white rounded-lg shadow-lg p-4">
            <Usuarios />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CalendarPage;
