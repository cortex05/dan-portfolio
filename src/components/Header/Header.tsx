import React from "react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.headerBody}>
        <div className={styles.navLinks}>
          <button onClick={() => navigate("/")} className={styles.one}>About</button>
          <button onClick={() => navigate("/skills")} className={styles.two}>Skills</button>
          <button onClick={() => navigate("/projects")} className={styles.three}>Projects</button>
          <button onClick={() => navigate("/contact")} className={styles.four}>Contact</button>

          {/* <button onClick={() => navigate("/contact")} className={styles.five}>Contact</button>
          <button onClick={() => navigate("/contact")} className={styles.six}>Contact</button> */}
        </div>
        <ThemeToggle />
      </div>
    </>
  );
};

export default Header;
