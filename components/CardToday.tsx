import React from 'react';
import styles from "../styles/card-today.module.css";
import { TodayProps } from '../type';
import BarHumidity from './BarHumidity';

interface Props {
    item :TodayProps
}

const CardToday = ({item}:Props) => {
    const value = item.value.toString();
    return (
        <div className={styles['card-today']}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.value}>{value.replace('.', ',')}<span className={styles.measure}>{item.measure}</span></p>
            {item.name === "Humidity" ? <BarHumidity humidity={item.value}/> : null}
            {item.name.includes("Wind") && <span className="fa-solid fa-location-arrow"></span>}
        </div>
    );
};

export default CardToday;