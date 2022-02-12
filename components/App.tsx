import React, { useRef, useState } from 'react'
import { destruData, destruDataToday } from '../helper/service'
import { DayType, TodayInterface, TodayProps } from '../type'
import Banner from './Banner'
import CardDay from './CardDay'
import CardToday from './CardToday'
import Footer from './Footer'
import Header from './Header'
import styles from '../styles/Home.module.css'
import ModalSearch from './ModalSearch'

interface Props {
    data : []
}

const App = ({data}:Props) => {
   const res:DayType[] = destruData({data: data.consolidated_weather}) 
   const resToday:TodayInterface = destruDataToday({data: data.consolidated_weather[0]})

   const [dataWeather, setDataWeather] = useState<DayType[]>(res)
   const [dataToday, setDataToday] = useState(resToday)
   const [showModal, setShowModal] = useState(false)

   const ref = useRef<HTMLDivElement>(null)

   const handleModal = () => {
      ref.current?.classList.toggle(styles['show-modal'])
   }

  return (
    <>
     <Header handleModal={handleModal}/> 
      <ModalSearch ref={ref} handleModal={handleModal}/>
      <Banner temperature={dataToday.the_temp} day={dataToday.applicable_date} weatherName={dataToday.weather_state_name} location={data.title}/>
      <div className={styles['container-grid']}>
         {dataWeather.map((item:DayType, index:number) =>  <CardDay index={index} key={item.id} dataDay={item}/>)}
      </div> 
      <h2 className={styles['sub-title']}>{`Today's Hightlights`}</h2>
     <div className={styles['grid-today']}>
        { dataToday.data.map((item:TodayProps) => <CardToday item={item} key={item.name}/>) }
     </div>
     <Footer/>
    </>
  )
}

export default App