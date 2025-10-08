import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h1>This is the skills page!</h1>
      {/* FRONTEND */}
      <div className={styles.skillSection}>
        <h2>Front End</h2>
        <div>
          <div>
            <span>A small image icon - </span>
            <span>HTML</span>
          </div>
          <div>
            <span>A small image icon - </span>
            <span>React</span>
          </div>
        </div>
      </div>
      {/* BACKEND */}
      <div className={styles.skillSection}>
        <h2>Back End</h2>
        <div>
          <div>
            <span>A small image icon - </span>
            <span>Nodejs</span>
          </div>
          <div>
            <span>A small image icon - </span>
            <span>Java</span>
          </div>
        </div>
      </div>
      {/* DATABASE */}
      <div className={styles.skillSection}>
        <h2>Database</h2>
        <div>
          <div>
            <span>A small image icon - </span>
            <span>MongoDB</span>
          </div>
          <div>
            <span>A small image icon - </span>
            <span>MySQL</span>
          </div>
        </div>
      </div>
      {/* TOOLS */}
      <div className={styles.skillSection}>
        <h2>Tools</h2>
        <div>
          <div>
            <span>A small image icon - </span>
            <span>Git</span>
          </div>
          <div>
            <span>A small image icon - </span>
            <span>Azure</span>
          </div>
        </div>
      </div>
      <p>
        Stacks?
      </p>
    </div>
  );
};

export default Skills;
