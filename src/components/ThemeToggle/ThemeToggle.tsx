import { useState } from "react";
import { useTheme } from "../../App";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    toggleTheme();
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.themeToggleContainer}>
      <span>
        {theme === 'dark' ? 'Dark' : 'Light'} Mode
      </span>
      <label htmlFor="theme-toggle" className={styles.switch}>
        <input type="checkbox" id="theme-toggle" checked={isChecked} onChange={handleToggle} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};
