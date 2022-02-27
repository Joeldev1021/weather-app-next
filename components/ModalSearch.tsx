import { useRouter } from 'next/router';
import React, { forwardRef, Ref, useEffect, useState } from 'react';
import styles from '../styles/modal-search.module.css';

type ModalProps ={
    handleModal: () => void;
}

interface typeSearch { 
    title : string;
    location_type : string;
    woeid : number;
    latt_long : string;
}

type RefProps = Ref<HTMLDivElement>

const ModalSearch = ({handleModal}:ModalProps, ref:RefProps) => {
    const [query, setQuery] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState<typeSearch[]>([]);
    const [cityId, setCityId] = useState<number>(); 
    const route = useRouter();
 
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };   
    // onsubmit
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getData(); 
    };
    // onclick suggestion
    const handleClick=(n:number)=> {
        route.push(`/${n}`);
    };
    // get data
    const getData = async () => {
        const response = await fetch(`http://localhost:3000/api/location/${query}`);
        const data = await response.json();
        setCityId(data.data[0].woeid);
    }; 

    useEffect(() => {
        if(query.length > 0){
            fetch(`http://localhost:3000/api/location/${query}`)
                .then(res => res.json())
                .then(data => setSearchQuery(data.data));
        }else {
            setSearchQuery([]);
        }
    }, [query]);

    useEffect(() => {
        if(cityId) {
            route.push(`/${cityId}`);
        }
    }, [cityId, route]);
    
    return (
        <div ref={ref} className="modal-search">
            <button onClick={()=> handleModal()} className={styles['modal-close']}>x</button>
            <form className={styles['modal-form']} onSubmit={handleSubmit}>
                <input onChange={handleChange} value={query} type="text" />
                <button>Search</button>
            </form>
            <div className={styles['container-suggestion']}>
                {searchQuery.length> 0 &&  searchQuery.map(item => <button onClick={()=> handleClick(item.woeid)} key={item.woeid}>{item.title}</button>)}
            </div>
        </div>
    );
};

export default forwardRef(ModalSearch);