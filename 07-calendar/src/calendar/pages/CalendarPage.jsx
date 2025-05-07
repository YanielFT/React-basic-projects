import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Navbar, CalendarEvent, CalendarModal } from "../index";
import { localizer, getMessagesEs } from "../../helper";
import { useState } from "react";
import { useCalendarStore, useUiStore } from "../../hooks";
import { FabAddNew } from "../components/FabAddNew";
import { FabDelete } from "../components/FabDelete";

export const CalendarPage = () => {
  const [view, setView] = useState(localStorage.getItem("view") || "week");
  const { onOpenDateModal } = useUiStore();
  const { events, selectEvent, activeEvent } = useCalendarStore();

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: isSelected ? "#ff6347" : "#343a40",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return { style };
  };

  const onDoubleClick = () => {
    onOpenDateModal();
  };
  const onSelect = (event) => {
    selectEvent(event._id);
  };
  const OnViewChanged = (event) => {
    localStorage.setItem("view", event);
    setView(event);
  };

  return (
    <>
      <Navbar />
      <CalendarModal />
      {activeEvent && <FabDelete />}
      <FabAddNew />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={view}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 100px)", marginInline: "1rem" }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDoubleClick}
        onView={OnViewChanged}
        onSelectEvent={onSelect}
      />
    </>
  );
};
