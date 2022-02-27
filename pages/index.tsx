import type {  NextPage } from 'next';
import { useEffect, useState } from 'react';
import App from '../components/App';
import Layout from '../components/Layout';

const Home: NextPage = () => {
    const [data, setData] = useState([]); 
    useEffect(() => {
        fetch(`http://localhost:3000/api/weather`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, []);
    
    return (
        <Layout >
            <App data={data} /> 
        </Layout>
    );
};

export default Home;