import React, { forwardRef, Ref } from 'react'
import styles from "../styles/header.module.css"

type ModalProps ={
    handleModal: () => void;
}


function Header({handleModal}:ModalProps) {
  return (
    <header className={styles.header}>
        <button onClick={()=>handleModal()} className={styles['btn-search']}>search for places</button>
        <button className={styles['btn-location']}><i className="fa-solid fa-location-crosshairs"></i></button>
    </header>
  )
}

export default forwardRef(Header) 