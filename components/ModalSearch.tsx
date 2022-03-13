import { useRouter } from 'next/router';
import React, { forwardRef, Ref, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
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
    const [inputChange, setInputChange] = useState<string>('');
    const route = useRouter();
 
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputChange(e.target.value);
    };   
    // onsubmit
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //getData();
        setQuery(inputChange.charAt(0).toUpperCase() + inputChange.slice(1)); 
    };

    const {data} = useFetch(`/api/location/${query}`);

    // onclick suggestion
    const handleClick=(n:number)=> {
        route.push(`/${n}`);
    };

    useEffect(() => {
        if(inputChange.length > 0){
            fetch(`api/location/${inputChange}`)
                .then(res => res.json())
                .then(data => setSearchQuery(data.data));
        }else {
            setSearchQuery([]);
        }
    }, [inputChange]);

    useEffect(() => {
        if(data) {
            console.log(data.data[0].woeid);
            route.push(`/${data.data[0].woeid}`);
        }
    }, [data, route]);
    
    return (
        <div ref={ref} className="modal-search">
            <button onClick={()=> handleModal()} className={styles['modal-close']}>x</button>
            <form className={styles['modal-form']} onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputChange} type="text" />
                <button>Search</button>
            </form>
            <div className={styles['container-suggestion']}>
                {searchQuery.length> 0 &&  searchQuery.map(item => <button onClick={()=> handleClick(item.woeid)} key={item.woeid}>{item.title}</button>)}
            </div>
        </div>
    );
};

export default forwardRef(ModalSearch);