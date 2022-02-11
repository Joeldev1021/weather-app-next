import React from 'react'
import styles from "../styles/card-today.module.css"

interface Props {
    item : {
        name: string
        value: number
    }
}

const CardToday = ({item}:Props) => {
    console.log(item)
  return (
        <div className={styles['card-today']}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.value}>{item.value}</p>
        </div>
  )
}

export default CardToday