/* eslint-disable no-unused-vars */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { useLocation } from '../hooks/useLocation';
import styles from "../styles/header.module.css";

type ModalProps ={
    handleModal: () => void;
}

function Header({handleModal}:ModalProps) {
    const [searchLocation, setSearchLocation ] = useState<boolean>(false); 
    const [cityId, setCityId] = useState<number>();
    const {currentLocation} = useLocation(searchLocation);
    const { data ,loading, error } = useFetch(`/api/currentPosition/${currentLocation}`);

    const route = useRouter();

    const handleClick = () => {
        setSearchLocation(!searchLocation); 
    };

    useEffect(() => {
        if(data) {
            route.push(`/${data.data.woeid}`);
        }
    }, [data, route]);

    return (
        <header className={styles.header}>
            <button onClick={()=>handleModal()} className={styles['btn-search']}>search for places</button>
            <button onClick={()=>handleClick()} className={styles['btn-location']}><i className="fa-solid fa-location-crosshairs"></i></button>
        </header>
    );
}

export default Header; 
