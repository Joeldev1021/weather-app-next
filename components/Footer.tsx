import React from 'react'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <div className={styles['footer']}>
        <p>created by <span>username</span> - devChallenges.io</p>
    </div>
  )
}

export default Footer