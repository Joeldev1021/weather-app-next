import React from 'react';
import styles from '../styles/loading.module.css';

const Loading = () => {
    return (
        <div className={styles['lds-ripple']}><div></div><div></div></div>
    );
};

export default Loading;