import { StarOutlined } from "@mui/icons-material";
import { Grid2 as Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      sx={{
        minHeight: "calc(100vh - 120px)",
        backgroundColor: "primary.main",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        borderRadius: 4,
      }}
    >
      <Grid xs={12}>
        <StarOutlined sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid xs={12}>
        <Typography color="white" variant="h5">
          Select or create an entry
        </Typography>
      </Grid>
    </Grid>
  );
};
