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
          <span onClick={() => navigate("/")} className={styles.one}>About</span>
          <span onClick={() => navigate("/skills")} className={styles.two}>Skills</span>
          <span onClick={() => navigate("/projects")} className={styles.three}>Projects</span>
          <span onClick={() => navigate("/contact")} className={styles.four}>Contact</span>

          {/* <button onClick={() => navigate("/contact")} className={styles.five}>Contact</button>
          <button onClick={() => navigate("/contact")} className={styles.six}>Contact</button> */}
        </div>
        <ThemeToggle />
      </div>
    </>
  );
};

export default Header;
