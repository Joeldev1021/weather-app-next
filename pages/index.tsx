import type { GetStaticProps, NextPage } from 'next'
import Banner from '../components/Banner'
import CardDay from '../components/CardDay'
import CardToday from '../components/CardToday'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { destruData, destruDataToday } from '../helper/service'
import styles from '../styles/Home.module.css'
import { DayType, TodayProps } from '../type'

interface Props {
  data : [] 
}

const Home: NextPage<Props> = ({data}) => {
   console.log(data) 
   const res:DayType[] = destruData({data: data.consolidated_weather}) 
   
   const todayData:TodayProps[] = destruDataToday({data: data.consolidated_weather[0]})
  console.log(res)
  return (
    <Layout >
      <Header /> 
      <Banner temperature={res[0].the_temp} day={res[0].applicable_date} weatherName={res[0].weather_state_name}/>
      <div className={styles['container-grid']}>
        {res.map((item:DayType, index:number) =>  <CardDay index={index} key={item.id} dataDay={item}/>)}
      </div> 
     <div className={styles['grid-today']}>
        <h2>{`Today's Hightlights`}</h2>
        { todayData.map((item:TodayProps) => <CardToday item={item} key={item.name}/>) }
     </div>
     <Footer/>
    </Layout>
  )
}

export const getStaticProps:GetStaticProps<Props> = async () => {
  const store = await fetch("http://localhost:3000/api/weather") 
  const data = await store.json()
  return {
     props: {
      data
    }
  }
}

export default Home
