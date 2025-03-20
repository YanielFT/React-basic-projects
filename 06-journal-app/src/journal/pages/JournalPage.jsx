import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
export const JournalPage = () => {
  const dispatch = useDispatch();
  const { active, isSaving } = useSelector((state) => state.journal);
  const startNewNoteHandler = () => {
    dispatch(startNewNote());
  };
  return (
    <JournalLayout>
      {!active ? <NothingSelectedView /> : <NoteView {...active} />}
      <IconButton
        onClick={startNewNoteHandler}
        disabled={isSaving}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 100,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
