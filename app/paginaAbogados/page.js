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
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Calendario</h1>
        <MyCalendar events={events} />
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Lista de Usuarios</h1>
          <Usuarios />
      </div>
    </div>
  );
};

export default CalendarPage;
