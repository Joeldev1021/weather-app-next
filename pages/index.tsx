import type { GetStaticProps, NextPage } from 'next'
import App from '../components/App'
import Layout from '../components/Layout'

interface Props {
  data : [] 
}

const Home: NextPage<Props> = ({data}) => {
  return (
    <Layout >
      <App data={data}/>
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
