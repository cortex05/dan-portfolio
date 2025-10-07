import React from "react";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <h1>Daniel Cortes - Software Engineer</h1>
      <div className={styles.intro}>
        <div>THis is a big block of text</div>
        <div>THis is an image</div>
      </div>
      <div className={styles.employmentHistory}>
        <h2>Employment History</h2>
        <div>
          <div>
            <h3>Hoyack LLC</h3>
            <p>July 2025 - September 2025</p>
          </div>
          <p>THis was my time at Hoyack</p>
          <span>Tech used</span>
          <ul>
            <li>- React</li>
            <li>- Javascript</li>
            <li>- TypeScript</li>
            <li>- Node.js</li>
          </ul>
        </div>
        <div>
          <div>
            <h3>Kroger</h3>
            <p>December 2021 - March 2025</p>
          </div>
          <p>I worked here for years</p>
          <span>Tech used</span>
          <ul>
            <li>- React</li>
            <li>- Javascript</li>
            <li>- TypeScript</li>
            <li>- Node.js</li>
          </ul>
        </div>
        <div>
          <div>
            <h3>Ceballos Technologies</h3>
            <p>September 2021 - December 2021</p>
          </div>
          <p>THis was my time at Hoyack</p>
          <span>Tech used</span>
          <ul>
            <li>- React</li>
            <li>- Javascript</li>
            <li>- TypeScript</li>
            <li>- Node.js</li>
          </ul>
        </div>
        <div>
          <div>
            <h3>Nucamp</h3>
            <p>March 2020 - September 2022</p>
          </div>
          <p>THis was my time at Hoyack</p>
          <span>Tech used</span>
          <ul>
            <li>- React</li>
            <li>- Javascript</li>
            <li>- TypeScript</li>
            <li>- Node.js</li>
          </ul>
        </div>
      </div>
      <div className={styles.education}>
        <h2>Education</h2>
        <div>
          <div>
            <h3>CodeUp</h3>
            <p>December 2020 - May 2021</p>
          </div>
          <p>Explain CodeUp here.</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
