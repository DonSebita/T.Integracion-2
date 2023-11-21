"use client";
import React from "react";
import MyCalendar from "@/components/MyCalendar";
import Usuarios from "@/components/usuarios";

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
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <div className="lg:w-1/2 bg-indigo-400 p-6">
        <h1 className="text-3xl mb-4 font-semibold text-white">Calendario</h1>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <MyCalendar events={events} />
        </div>
      </div>
      <div className="lg:w-1/2 bg-teal-400 p-6">
        <h1 className="text-3xl mb-4 font-semibold text-white">Lista de Usuarios</h1>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <Usuarios />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
