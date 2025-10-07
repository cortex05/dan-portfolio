import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <div className={styles.headerBody}>
            <div className={styles.navLinks}>
              <button onClick={() => navigate("/")}>About</button>
              <button onClick={() => navigate("/skills")}>Skills</button>
              <button onClick={() => navigate("/projects")}>Projects</button>
              <button onClick={() => navigate("/contact")}>Contact</button>
            </div>
            <ThemeToggle />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
