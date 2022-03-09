import { useRouter } from 'next/router';
import React, { forwardRef, useEffect, useState } from 'react';
import { useLocation } from '../hooks/useLocation';
import styles from "../styles/header.module.css";

type ModalProps ={
    handleModal: () => void;
}


function Header({handleModal}:ModalProps) {
    const [searchLocation, setSearchLocation ] = useState<boolean>(false); 
    const [cityId, setCityId] = useState<number>();
    const {currentLocation} = useLocation(searchLocation);

    const route = useRouter();
    const handleClick = () => {
        setSearchLocation(!searchLocation); 
    };
    useEffect(() => {
        if(currentLocation){
            fetch(`/api/currentPosition/${currentLocation}`) 
                .then(res => res.json())
                .then(data => setCityId(data.data.woeid));
        }
    }, [currentLocation]);

    useEffect(() => {
        if(cityId){
            route.push(`/${cityId}`); 
        }
    }, [cityId, route]);
  
    return (
        <header className={styles.header}>
            <button onClick={()=>handleModal()} className={styles['btn-search']}>search for places</button>
            <button onClick={()=>handleClick()} className={styles['btn-location']}><i className="fa-solid fa-location-crosshairs"></i></button>
        </header>
    );
}

export default forwardRef(Header); 