import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

interface NavbarProps {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ setDrawerOpen }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        height: "50px",
        zIndex: 1000,
        top: "0px",
        bgcolor: "white",
        left: "0px",
        right: "0px",
        paddingX: "10px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", columnGap: 5 }}>
        <MenuIcon onClick={() => setDrawerOpen(true)} />
        <h1>Telegram</h1>
      </Box>
      {/* <ThemeToggle /> */}
      <Box>
        <SearchIcon />
      </Box>
    </Box>
  );
};

export default Navbar;
