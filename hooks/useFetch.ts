import { useEffect, useState } from "react";

export default function useFetch(url:string) {
    
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        dataFetch();
    }, [url]);

    const dataFetch = async ()=> {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false); 
        }
    };

    return { data, loading, error };	    
}
