import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function FetchAPI() {
    const [{itemName, director}, setItem] = useState({itemName : "", director : ""});
    const apiAddress = 'https://swapi.dev/api/films/1/';

    useEffect(() => {
        const getName = async () => {
            const f =  await axios.get(apiAddress);
            console.log(f);
            setItem({
                itemName : f.data.title,
                director : f.data.director
            });
        }
        getName();
    },[])

    return (
        <div>
            {itemName}, {director}
        </div>
    )
}
