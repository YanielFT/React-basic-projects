/* eslint-disable react/prop-types */
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
export const ImageGallery = ({ note }) => {
  console.log("note", note);

  return (
    <ImageList sx={{ width: "100%", height: 450 }} cols={4} rowHeight={164}>
      {note?.map((item) => (
        <ImageListItem key={item}>
          {console.log(item)}
          <img
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            alt={item}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
