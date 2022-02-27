/* eslint-disable no-unused-vars */
import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import App from '../components/App';
import Layout from '../components/Layout';
import Loading from '../components/Loading';

interface Props {
  data : [] 
}

const Home: NextPage<Props> = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:3000/api/weather')
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => setError(true))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <Layout>
            {isLoading ? <Loading/> : <App data={data} />}
        </Layout>
    );
};

export default Home;
