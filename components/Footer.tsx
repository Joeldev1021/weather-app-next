import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        <div className={styles['footer']}>
            <p>created by <a href='https://devchallenges.io/'>username</a> - devChallenges.io</p>
        </div>
    );
};

export default Footer;