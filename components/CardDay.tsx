import React from 'react';
import { DayType } from '../type';
import styles from "../styles/card-day.module.css";
import { imgWeather } from '../helper/service';

interface Props {
    dataDay: DayType;
    index: number
}


const CardDay = ({dataDay, index}:Props) => {
    const date = new Date(dataDay.applicable_date).toDateString().split(" ").slice(0, 3).join(" ");
    const img = imgWeather[dataDay.weather_state_name.toLocaleLowerCase()]; 
    return (
        <div className={styles['card-day']}>
            <p key={dataDay.id}>{index == 0 ?"Tomorrow": date}</p>
            <img className={styles['card-day-img']} src={img} alt="shower" />
            <div className={styles['card-day-temp']}>
                <p>{Math.round(dataDay.max_temp)}<span className={styles.centigrate}>o</span>C</p>
                <p>{Math.round(dataDay.min_temp)}<span className={styles.centigrate}>o</span>C</p>
            </div>
        </div>
    ); 
};

export default CardDay;