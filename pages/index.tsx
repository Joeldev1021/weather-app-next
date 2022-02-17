import type { GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import App from '../components/App'
import Layout from '../components/Layout'

interface Props {
  data : [] 
}


const Home: NextPage<Props> = ({data}) => {
  console.log(data) 
  return (
    <Layout >
      <App data={data} /> 
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    
  const response  = await fetch(`http://localhost:3000/api/weather`)
  const data = await response.json()
  return {
    props: {
      data
    }
  }
}

export default Home
