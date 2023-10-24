"use client";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addYears, subYears } from "date-fns";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events }) => {
  const [view, setView] = React.useState("month");
  const [date, setDate] = React.useState(new Date());

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleNavigate = (date, view) => {
    // Calcula nuevas fechas para navegación por años
    if (view === "year") {
      if (date > new Date()) {
        setDate(addYears(date, 1));
      } else {
        setDate(subYears(date, 1));
      }
    } else {
      // Restaura la fecha a la fecha actual para otras vistas
      setDate(new Date());
    }
  };

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        view={view}
        onView={handleViewChange}
        onNavigate={handleNavigate}
        views={['month', 'week', 'day', 'year']}
        date={date} // Establece la fecha actual para el calendario
      />
    </div>
  );
};

export default MyCalendar;
