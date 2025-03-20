import { Grid2 as Grid, CircularProgress } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
      }}
    >
      <Grid
        sx={{
          width: { sm: 450 },
          marginInline:'auto',
          alignItems:'center',
          justifyContent:'center',
          display:'flex'
        }}
      >
        <CircularProgress color="warning" />
      </Grid>
    </Grid>
  );
};
