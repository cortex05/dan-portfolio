import styles from "./Projects.module.css";

//Live
import pythonAdventure from "../../assets/images/python-adventure.png"
import educationResourceImg from "../../assets/images/educationResource.png";
import recipeAppImg from "../../assets/images/jsRecipe.png";

// Legacy
import notAnotherImg from "../../assets/images/not-another.png";
import mernBlogImg from "../../assets/images/mernBlog.png";
import reduxPollImg from "../../assets/images/redux.png";
import weatherAppImg from "../../assets/images/weatherApp.png";

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1>Projects</h1>
      {/* Live deployed projects */}
      <div className={styles.projectSection}>
        <h2>Live Projects</h2>
        <p>These projects are currently deployed and available online.</p>
        {/* 2026 */}
        <div className={styles.projectCard}>
          <h3>Python Adventure Game - 2026</h3>
          <div>
            <img src={pythonAdventure} alt="Python Adventure" />
            <div>
              <p>
                A Python terminal based game that takes input from users. Players navigate several structures, fight enemies and level up as they progress. - <a href="https://github.com/cortex05/adventure-mk-2?tab=readme-ov-file#adventure-game-mark-2" target="_blank" rel="noreferrer">
                    LIVE SITE
                  </a>
              </p>
              <div>
                <span>- Python</span>
              </div>
            </div>
          </div>
        </div>
        {/* 2025 */}
        <div className={styles.projectCard}>
          <h3>Education Resource - 2025</h3>
          <div>
            <img src={educationResourceImg} alt="Education Resource" />
            <div>
              <p>
                A MERN stack application to provide free educational resources in various frameworks. While the number of courses are few at the moment, the curriculum is constantly being updated to include more subjects. - <a href="https://ed-mk-4.vercel.app/" target="_blank" rel="noreferrer">
                    LIVE SITE
                  </a>
              </p>
              <div>
                <span>- MongoDB</span>
                <span>- Express</span>
                <span>- React</span>
                <span>- Node</span>
                <span>- Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectCard}>
          <h3>Recipe App - 2019</h3>
          <div>
            <img src={recipeAppImg} alt="Recipe App" />
            <div>
              <p>
                A webpack compiled application that allows users to make a
                recipe with ingredients and steps to follow to make them. Uses
                local storage to allow users to create, read, update and delete
                recipes. - <a href="https://eager-hermann-f38d2c.netlify.app/" target="_blank" rel="noreferrer">
                    LIVE SITE
                  </a>
              </p>
              <div>
                <span>- Webpack</span>
                <span>- Javascript</span>
                <span>- Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Work in progress */}
      {/* <div className={styles.projectSection}>
        <h2>Projects in development</h2>
        <div className={styles.projectCard}>
          <h3>Python Adventure game - 2025</h3>
          <div>
            <span>Here is an image</span>
            <p>Player through this command line adventure game!</p>
            <div>
              <span>- Python</span>
            </div>
            <div className={styles.projectLinks}>
              
            </div>
          </div>
        </div>
      </div> */}
      {/* Legacy projects */}
      <div className={styles.projectSection}>
        <h2>Legacy Projects</h2>
        <p>
          These projects are no longer actively maintained. Code may be
          available for viewing.
        </p>
        <div className={styles.projectCard}>
          <h3>Not another Bookclub - 2021</h3>
          <div>
            <img src={notAnotherImg} alt="Not another Bookclub" />
            <div>
              <p>
                An application that allowed people to join, make and curate book
                clubs. Google books API was used to provide the books and a
                MySQL database was used for keeping record of the clubs and the
                books and users in them.
              </p>
              <div>
                <span>- Thymeleaf</span>
                <span>- Java</span>
                <span>- MySQL</span>
                <span>- Spring Boot</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.projectCard}>
          <h3>MERN Blog - 2018</h3>
          <div>
            <img src={mernBlogImg} alt="MERN Blog" />
            <div>
              <p>
                A blog platform built with the MERN stack which allowed users to
                create, edit, delete and add comments to posts. It featured user
                authentication and a responsive design.
              </p>
              <div>
                <span>- MongoDB</span>
                <span>- Express</span>
                <span>- React</span>
                <span>- Node.js</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.projectCard}>
          <h3>Redux Poll - 2018</h3>
          <div>
            <img src={reduxPollImg} alt="Redux Poll" />
            <div>
              <p>
                An application that used React and Redux to allow users to poll
                questions with two options. Then a logged in user could answer
                the poll and the statistics of which answers have been chosen
                would be displayed.
              </p>
              <div>
                <span>- React</span>
                <span>- Redux</span>
                <span>- Bootstrap</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.projectCard}>
          <h3>Weather App - 2018</h3>
          <div>
            <img src={weatherAppImg} alt="Weather App" />
            <div>
              <p>
                An application that Ejs and Node to use weather api calls to
                display weather data for certain locations.
              </p>
              <div>
                <span>- Ejs</span>
                <span>- Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
