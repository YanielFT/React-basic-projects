/* eslint-disable react/prop-types */
import { useForm } from "../../hooks/useForm";
import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import {
  Button,
  Grid2,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ImageGallery } from "../components";
import moment from "moment";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";
import {
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
} from "../../store/journal/thunks";
import { enqueueSnackbar } from "notistack";

export const NoteView = ({ title, body, date, imageUrl }) => {
  const dispatch = useDispatch();

  const fileInputRef = useRef();
  const initialForm = useMemo(
    () => ({
      title: title ?? "",
      body: body ?? "",
      imageUrl: imageUrl ?? [],
    }),
    [title, body, imageUrl]
  );
  const {
    title: titleValue,
    body: bodyValue,
    onInputChange,
    onBlur,
    isFormValid,
    isSaving,
    formState,
  } = useForm(initialForm);

  const { messageSaved } = useSelector((state) => state.journal);

  useEffect(() => {
    if (messageSaved.length > 0)
      enqueueSnackbar(messageSaved, {
        variant: "success",
        anchorOrigin: { horizontal: "right", vertical: "top" },
      });
  }, [messageSaved]);

  const onBLurHandle = () => {
    onBlur(() => dispatch(setActiveNote(formState)));
  };
  const saveHandle = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files.length === 0) return;

    dispatch(startUploadingFiles(target.files));
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
  };

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ mb: 1 }}
      >
        <Grid2>
          <Typography fontSize={30} fontWeight={"light"}>
            {moment(date).format("LLLL")}
          </Typography>
        </Grid2>
        <Grid2>
          
          <Button onClick={onDelete} color="error">
            <DeleteOutline />
          </Button>

          <IconButton
            onClick={() => fileInputRef.current.click()}
            color="primary"
            disabled={isSaving}
          >
            <UploadOutlined />
          </IconButton>

          <input
            ref={fileInputRef}
            style={{ display: "none" }}
            type="file"
            multiple
            onChange={onFileInputChange}
          />

          <Button
            disabled={isFormValid}
            onClick={saveHandle}
            color="primary"
            sx={{ padding: 2 }}
          >
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid2>
      </Stack>
      <Grid2 container sx={{ maxWidth: 1300, mx: "auto" }}>
        <TextField
          variant="filled"
          type="text"
          fullWidth
          placeholder="Type a title"
          label="Title"
          name="title"
          onChange={onInputChange}
          value={titleValue}
          onBlur={onBLurHandle}
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          variant="filled"
          type="text"
          fullWidth
          multiline
          placeholder="What happened today?"
          minRows={5}
          sx={{ border: "none", mb: 1 }}
          name="body"
          onChange={onInputChange}
          value={bodyValue}
          onBlur={onBLurHandle}
        />
        <ImageGallery note={imageUrl} />
      </Grid2>
    </>
  );
};
