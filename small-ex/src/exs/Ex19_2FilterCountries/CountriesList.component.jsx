import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function CountriesList() {
    const [itemNameList, setItem] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const apiAddress = 'https://restcountries.eu/rest/v2/all';

    useEffect(() => {
        const getNameList = async () => {
            const c =  await axios.get(apiAddress);
            setItem(c.data.map(country => country.name));
        }
        getNameList();
    },[])

    const itemNameListDivs = (items) => {
        return (
            items.map((country, i) => <div key={i}>{country}</div>)
        )
    }

    const SearchResults = () => {
        return itemNameListDivs(itemNameList.filter(country => country.toLowerCase().startsWith(searchTerm)))
    }

    const changeHandler = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <input type="text" placeholder="filter countries by name" value={searchTerm} onChange={changeHandler}></input>
            <SearchResults />
        </div>
    )
}
