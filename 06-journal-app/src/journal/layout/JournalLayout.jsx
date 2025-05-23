import { Box, Toolbar } from "@mui/material";
import { Navbar, Sidebar } from "../components";

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWitdh={drawerWidth} />
      <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar/>
        {children}
      </Box>
    </Box>
  );
};
