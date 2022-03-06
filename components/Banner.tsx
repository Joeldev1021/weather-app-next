import React, { useEffect, useState } from "react";
import { centigrateToFarenheit, imgWeather } from "../helper/service";
import styles from "../styles/banner.module.css";
import Header from "./Header";

interface Props {
    temperature: number;
    day: string;
    weatherName: string;
    location: string;
    handleModal: () => void;
    isCentigrate: boolean;
}

const Banner = ({temperature,isCentigrate, handleModal, day, weatherName, location}:Props) => {
    console.log(weatherName);
    const img:string = imgWeather[weatherName.toLocaleLowerCase()];
    const [tempToday, setTempToday] = useState(Math.round(temperature));

    useEffect(() => {
        changeTempToday(); 
    }, [isCentigrate]);
    
    const changeTempToday = () => {
        if(!isCentigrate){
            setTempToday(centigrateToFarenheit(tempToday));
        }else {
            setTempToday(Math.round(temperature));
        }
    }; 

    return (
        <div className={styles.banner}>
            <Header handleModal={handleModal}/>
            <div className={styles.main}>
                <img className={styles.img} src={img} alt={weatherName} />
                <p className={styles.temp}>{tempToday}<span className={styles['degrees-icon']}>o</span><span className={styles.c}>c</span></p>
                <h2>{weatherName}</h2>
                <div className={styles.date}>
                    <p>Today <span className={styles.point}></span>{new Date(day).toDateString().split(" ").slice(0, 3).join(" ")}</p>
                    <p className={styles.location}><i className="fa-solid fa-location-dot"></i>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;