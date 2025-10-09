import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact</h1>
      <div>
        <p>Email: daniel.cortes.83944@gmail.com</p>
        <p>Github: https://github.com/cortex05</p>
        <p>LinkedIn: https://www.linkedin.com/in/daniel-cortes83944/</p>
      </div>
    </div>
  )
}

export default Contact