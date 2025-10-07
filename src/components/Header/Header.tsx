
import React from "react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className={styles.headerBody}>
            <div className={styles.navLinks}>
              <button onClick={() => navigate("/")}>About</button>
              <button onClick={() => navigate("/skills")}>Skills</button>
              <button onClick={() => navigate("/projects")}>Projects</button>
              <button onClick={() => navigate("/contact")}>Contact</button>
            </div>
            <ThemeToggle />
          </div>
    </>
  );
};

export default Header;
