import { Outlet } from "react-router-dom";
import Drawer from "../shared/Drawer/Drawer";
import Navbar from "../shared/Navbar/Navbar";
import { useState } from "react";
import { Box } from "@mui/material";

const MainLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Navbar setDrawerOpen={setDrawerOpen} />
      <Box sx={{ marginTop: "50px" }}>
        <Outlet />
      </Box>
    </div>
  );
};

export default MainLayout;
