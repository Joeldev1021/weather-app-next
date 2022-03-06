import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import  App  from '../components/App';
import Loading from '../components/Loading';
const Index = () => {

    const {id} = useRouter().query;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        setData(null);
        fetch(`api/weatherData/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .finally(() =>  setLoading(false));
    }, [id]); 
    return (
        <Layout >
            {loading ? <Loading/>: <App data={data} />} 
        </Layout>
    );
};


export default Index;