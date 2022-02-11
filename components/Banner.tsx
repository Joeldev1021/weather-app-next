import React from "react";
import styles from "../styles/banner.module.css";

interface Props {
    temperature: number;
    day: string;
    weatherName: string;
}

const Banner = ({temperature, day, weatherName}:Props) => {
  console.log(weatherName)
  return (
    <div className={styles.banner}>
      <div className={styles.main}>
       <img className={styles.img} src="./assets/Shower.png" alt="shower" />
       <span className={styles.temp}>{Math.round(temperature)}C</span>
       <h2>{weatherName}</h2>
       <div>
         <p>{new Date(day).toDateString().split(" ").slice(0, 3).join(" ")}</p>
       </div>
      </div>
    </div>
  );
};

export default Banner;
