import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

interface Props {
  data : [] 
}

const Home: NextPage<Props> = ({data}) => {
  console.log(data)
  return (
    <div className={styles.container}>
       
    </div>
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
