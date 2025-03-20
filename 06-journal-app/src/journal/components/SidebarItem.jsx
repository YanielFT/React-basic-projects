/* eslint-disable react/prop-types */
import { TurnedInNot } from "@mui/icons-material";
import {
  Grid2,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

// eslint-disable-next-line react/prop-types
export const SidebarItem = ({ note }) => {
  const disptach = useDispatch();
  const setActiveNoteHandler = () => {
    disptach(setActiveNote(note));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={setActiveNoteHandler}>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <TurnedInNot />
        </ListItemIcon>
        <Grid2 container direction="column">
          <ListItemText
            primary={<TruncatedText text={note.title} maxLength={20} />}
          />
          <ListItemText
            secondary={<TruncatedText text={note.body} maxLength={45} />}
          />
        </Grid2>
      </ListItemButton>
    </ListItem>
  );
};

const TruncatedText = ({ text = "", maxLength }) => {
  if (!text || text.trim() === "") {
    return "vacío";
  }

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength)}...`;
};
