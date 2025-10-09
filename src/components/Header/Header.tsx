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
        </div>
        <ThemeToggle />
      </div>
    </>
  );
};

export default Header;
