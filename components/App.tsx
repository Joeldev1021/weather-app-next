/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { destruData } from "../helper/service";
import { DataWeather, DayType, TodayProps } from "../type";
import Banner from "./Banner";
import CardDay from "./CardDay";
import CardToday from "./CardToday";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";
import ModalSearch from "./ModalSearch";

interface Props {
  data: any;
}

const App = ({ data}: Props) => {
    const res: DataWeather = destruData({ data });
    const [dataWeather, setDataWeather] = useState<DataWeather>(res);
    const [isCentigrate, setIsCentigrate] = useState<boolean>(true);

    const ref = useRef<HTMLDivElement>(null);

    const handleModal = () => {
        ref.current?.classList.toggle("show-modal");
    };

    const handleCentigrade = ()=> {
        setIsCentigrate(true); 
    };

    const handleFahrenheit = ()=> {
        setIsCentigrate(false);
    };

    return (
        <div className={styles.App}>
            <div className={styles["container-banner"]}>
                <ModalSearch ref={ref} handleModal={handleModal} />
                <Banner
                    isCentigrate={isCentigrate}
                    handleModal={handleModal}
                    temperature={dataWeather.dataToday.the_temp}
                    day={dataWeather.dataToday.applicable_date}
                    weatherName={dataWeather.dataToday.weather_state_name}
                    location={dataWeather.title}
                />
            </div>
            <div className={styles["section-grid"]}>
                <div className={styles["btn-group"]}>
                    <button onClick={()=> handleCentigrade()}><span>o</span>C</button>
                    <button onClick={()=> handleFahrenheit()}><span>o</span>F</button>
                </div>
                <div className={styles["container-grid"]}>
                    {dataWeather.dataDays.map((item: DayType, index: number) => (
                        <CardDay isCentigrate={isCentigrate} index={index} key={item.id} dataDay={item} />
                    ))}
                </div>
                <h2 className={styles["sub-title"]}>{`Today's Hightlights`}</h2>
                <div className={styles["grid-today"]}>
                    {dataWeather.dataToday.data.map((item: TodayProps) => (
                        <CardToday item={item} key={item.name} />
                    ))}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
