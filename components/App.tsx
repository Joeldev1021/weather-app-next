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
import Loading from "./Loading";

interface Props {
  data: any;
}

const App = ({ data}: Props) => {
    const res: DataWeather = destruData({ data });

    const [dataWeather, setDataWeather] = useState<DataWeather>(res);

    const ref = useRef<HTMLDivElement>(null);

    const handleModal = () => {
        ref.current?.classList.toggle("show-modal");
    };
  

    return (
        <div className={styles.App}>
            <Loading/>
            <div className={styles["container-banner"]}>
                <ModalSearch ref={ref} handleModal={handleModal} />
                <Banner
                    handleModal={handleModal}
                    temperature={dataWeather.dataToday.the_temp}
                    day={dataWeather.dataToday.applicable_date}
                    weatherName={dataWeather.dataToday.weather_state_name}
                    location={dataWeather.title}
                />
            </div>
            <div className={styles["section-grid"]}>
                <div className={styles["container-grid"]}>
                    {dataWeather.dataDays.map((item: DayType, index: number) => (
                        <CardDay index={index} key={item.id} dataDay={item} />
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
