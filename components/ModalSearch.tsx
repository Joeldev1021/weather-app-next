import { useRouter } from 'next/router';
import React, { forwardRef, Ref, useEffect, useState } from 'react';
import styles from '../styles/modal-search.module.css';

type ModalProps ={
    handleModal: () => void;
}
type RefProps = Ref<HTMLDivElement>

const ModalSearch = ({handleModal}:ModalProps, ref:RefProps) => {
    const [city, setCity] = useState('');
    const [cityId, setCityId] = useState<string>('');
    const route = useRouter();
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    };   

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getData();
    };

    const getData = async () => {
        const response = await fetch(`http://localhost:3000/api/location/${city}`);
        const data = await response.json();
        setCityId(data.data[0].woeid);
    };

    useEffect(() => {
        if(cityId) {
            route.push(`/${cityId}`);
        }
    }, [cityId, route]);
   


    return (
        <div ref={ref} className="modal-search">
            <button onClick={()=> handleModal()} className={styles['modal-close']}>x</button>
            <form className={styles['modal-form']} onSubmit={handleSubmit}>
                <input onChange={handleChange} value={city} type="text" />
                <button>Search</button>
            </form>
        </div>
    );
};
export default forwardRef(ModalSearch);