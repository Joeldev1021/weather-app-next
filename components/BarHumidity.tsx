import React from 'react';
import styles from '../styles/barHumidity.module.css';

interface Props {
    humidity: number
}
const BarHumidity = ({humidity}:Props) => {

    return (
        <div className={styles['container-bar']}>
            <div className={styles['count-bar']}>
                <span>0</span><span>50</span><span>100</span>
            </div>
            <div className={styles.bar}>
                <div className={styles.progress} style={{width: `${humidity}%`}}></div>
            </div>
        </div>
    );
};

export default BarHumidity;