import { createSlice } from "@reduxjs/toolkit";
import { addDays, addHours } from "date-fns";

const TEMP_EVENT = {
  _id: 1,
  title: "cumpleaños del Jefe",
  notes: "Hay que comrpar el pastel",
  start: new Date().toISOString(),
  end: addHours(new Date(), 2).toISOString(),
  bgColor: "#fafafa",
  user: {
    _id: 123,
    name: "Yaniel",
  },
};

const TEMP_EVENT2 = {
  _id: 2,
  title: "Holiday",
  notes: "Take a rest",
  start: addDays(new Date(), 1).toISOString(),
  end: addHours(addDays(new Date(), 1), 2).toISOString(),
  bgColor: "#fffff",
  user: {
    _id: 123,
    name: "Yaniel",
  },
};

const initialState = {
  events: [TEMP_EVENT, TEMP_EVENT2],
  activeEvent: null,
};
export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    selectEvent: (state, { payload }) => {
      let event = null;
      if (payload) event = state.events.find((e) => e._id === payload);

      if (event) {
        state.activeEvent = event;
      } else {
        state.activeEvent = null;
      }
    },
    addEvent: (state, { payload }) => {
      state.events.push({
        ...payload,
        _id: new Date().toISOString(),
        start: payload.start.toISOString(),
        end: payload.end.toISOString(),
        bgColor: "#ffffff",
        user: {
          _id: 123,
          name: "Yaniel",
        },
      });
      state.activeEvent = null;
    },
    updateEvent: (state, { payload }) => {
      const foundEvent = state.events.findIndex((e) => e._id === payload._id);
      if (foundEvent != -1) {
        state.events[foundEvent] = { ...state.events[foundEvent], ...payload };
      }
    },

    deleteEvent: (state, { payload }) => {
      state.events = state.events.filter((e) => e._id !== payload);
      state.activeEvent = null;
    },
  },
});

export const { selectEvent, addEvent, updateEvent, deleteEvent } =
  calendarSlice.actions;
export default calendarSlice.reducer;
