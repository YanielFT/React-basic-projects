import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSaving: false,
  messageSaved: "",
  notes: [],
  active: null,
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = { ...state.active, ...action.payload };
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload.notes;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateNote: (state, action) => {
      const id = action.payload.id;
      state.notes = state.notes.map((note) =>
        note.id === id ? action.payload : note
      );
      state.isSaving = false;
      state.messageSaved = "Saved";
    },
    deleteNoteById: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.active = null;
    },

    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrl = [...state.active.imageUrl, ...action.payload];
      state.isSaving = false;
      state.messageSaved = "Saved";
    },
    clearNotes: () => initialState,
  },
});

export const {
  clearNotes,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  setPhotosToActiveNote,
  savingNewNote,
} = journalSlice.actions;
export default journalSlice.reducer;
