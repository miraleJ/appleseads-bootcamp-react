import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function SerchBar() {
    const [searchTerm, setSearchTerm] = useState('hooks');
    const [data, setData] = useState([]);

    const apiAddress = 'https://hn.algolia.com/api/v1/search?query=';

    useEffect(() => {
        const getDataFromApi = async () => {
            const d =  await axios.get(`${apiAddress}${searchTerm}`);
            setData(d.data.hits);
        }
        getDataFromApi();
    },[])

    const changeHandler = (event) => {
        setSearchTerm(event.target.value);
    }

    const clickHandler = () => {
        ;//TODO
    }

    return (
        <div>
            <input type="text" value={searchTerm} onChange={changeHandler}/>
            <input type="button" value="search" onClick={clickHandler} />
        </div>
    )
}
