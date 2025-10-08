import React from 'react'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1>Projects</h1>
      {/* Live deployed projects */}
      <div className={styles.projectSection}>
        <h2>Live Projects</h2>
        <div className={styles.projectCard}>
          <h3>Education Resource - 2025</h3>
          <div>
            <span>Here is an image</span>
            <p>This is a website where people have free links to resources</p>
            <div>
              <span>- React</span>
              <span>- Express</span>
              <span>- Nodejs</span>
              <span>- React</span>
              <span>- Express</span>
              <span>- Nodejs</span>
              <span>- React</span>
              <span>- Express</span>
              <span>- Nodejs</span>
            </div>
            <div className={styles.projectLinks}>

            </div>
          </div>
        </div>
      </div>
      {/* Work in progress */}
      <div className={styles.projectSection}>
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
      </div>
      {/* Legacy projects */}
      <div className={styles.projectSection}>
        <h2>Legacy Projects</h2>
        <div className={styles.projectCard}>
          <h3>Not another Bookclub - 2025</h3>
          <div>
            <span>Here is an image</span>
            <p>This is a website where people could make book clubs and discuss books.</p>
            <div>
              <span>- Thymeleaf</span>
              <span>- Java</span>
              <span>-MySQL</span>
            </div>
            <div className={styles.projectLinks}>
              
            </div>
          </div>
        </div>
      </div>
      <p>This will be for projects that are no longer running or are only in the code stage such as Github</p>
    </div>
  )
}

export default Projects