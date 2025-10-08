import React from 'react'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1>The projects page!</h1>
      <p>THis is where I will list projects I have made.</p>
      <p>The first section will be for live deployed projects. In the explanation, list when it was made</p>
      <p>This will be for projects that are no longer running or are only in the code stage such as Github</p>
    </div>
  )
}

export default Projects