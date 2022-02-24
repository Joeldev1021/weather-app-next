import React from "react";
import { imgWeather } from "../helper/service";
import styles from "../styles/banner.module.css";
import Header from "./Header";

interface Props {
    temperature: number;
    day: string;
    weatherName: string;
    location: string;
    handleModal: () => void;
}

const Banner = ({temperature, handleModal, day, weatherName, location}:Props) => {
    const img:string = imgWeather[weatherName.toLocaleLowerCase()];

    return (
        <div className={styles.banner}>
            <Header handleModal={handleModal}/>
            <div className={styles.main}>
                <img className={styles.img} src={img} alt={weatherName} />
                <p className={styles.temp}>{Math.round(temperature)}<span className={styles['degrees-icon']}>o</span><span className={styles.c}>c</span></p>
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