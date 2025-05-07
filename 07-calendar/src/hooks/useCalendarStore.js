import { useDispatch, useSelector } from "react-redux";
import {
  addEvent,
  deleteEvent,
  selectEvent,
  updateEvent,
} from "../store/calendar/calendarSlice";
import { useMemo } from "react";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const parsedEvents = useMemo(() => {
    return events.map((e) => ({
      ...e,
      start: new Date(e.start),
      end: new Date(e.end),
    }));
  }, [events]);

  const parsedActiveEvent = useMemo(() => {
    if (!activeEvent) return null;

    return {
      ...activeEvent,
      start: new Date(activeEvent.start),
      end: new Date(activeEvent.end),
    };
  }, [activeEvent]);

  const saveEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      dispatch(updateEvent(calendarEvent));
    } else {
      dispatch(addEvent(calendarEvent));
    }
  };

  const startDeletingEvent = async (id) => {
    dispatch(deleteEvent(id));
  };

  const dispatch = useDispatch();
  return {
    events: parsedEvents,
    activeEvent: parsedActiveEvent,
    selectEvent: (id) => dispatch(selectEvent(id)),
    saveEvent,
    deleteEvent: startDeletingEvent,
  };
};
