/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { DayType } from '../type';
import styles from "../styles/card-day.module.css";
import { centigrateToFarenheit, imgWeather } from '../helper/service';
import Image from 'next/image';

interface Props {
    dataDay: DayType;
    index: number
    isCentigrate: boolean;
}


const CardDay = ({dataDay, isCentigrate, index}:Props) => {
    const date = new Date(dataDay.applicable_date).toDateString().split(" ").slice(0, 3).join(" ");
    
    const img = imgWeather[dataDay.weather_state_name.toLocaleLowerCase()]; 

    const [maxTemp, setMaxTemp] = useState(Math.round(dataDay.max_temp));
    const [minTemp, setMinTemp] = useState(Math.round(dataDay.min_temp));
    
    useEffect(() => {
        changeTemp();
    }, [isCentigrate]);
    
    const changeTemp = () => {
        if(!isCentigrate){
            setMaxTemp(centigrateToFarenheit(maxTemp));
            setMinTemp(centigrateToFarenheit(minTemp));
        }else {
            setMaxTemp(Math.round(dataDay.max_temp));
            setMinTemp(Math.round(dataDay.min_temp));
        }
    };
    
    return (
        <div className={styles['card-day']}>
            <p key={dataDay.id}>{index == 0 ?"Tomorrow": date}</p>
            <img className={styles['card-day-img']} src={img} alt={img} /> 
            {/*  <Image height={60} width={60} src={img} alt={img}/> */} 
            <div className={styles['card-day-temp']}>
                <p>{maxTemp}<span className={styles.centigrate}>o</span>C</p>
                <p>{minTemp}<span className={styles.centigrate}>o</span>C</p>
            </div>
        </div>
    ); 
};

export default CardDay;

