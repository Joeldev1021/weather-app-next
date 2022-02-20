import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import  App  from '../components/App'
const Index = () => {

    const {id} = useRouter().query

    const [data, setData] = useState(null)
    useEffect(() => {
      setData(null)
     fetch(`http://localhost:3000/api/weatherData/${id}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
    }, [id]) 
    
  return (
    <Layout >
      {data && <App data={data} />}
    </Layout>
  )
}


export default Index