import axios, {AxiosResponse} from 'axios';
import React, { useState, useEffect } from 'react'
// import FetchAPI from '../Ex19.1SimpleFetch/FetchAPI.component';

export default function FetchButton({url}) {
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState("");

    const toggle = () => {
        setClicked(!clicked);
    }

    useEffect(() => {
        let source = axios.CancelToken.source();
        if (clicked) {
            const getName = async () => {
                const f =  await axios.get(url, {cancelToken: source.token});
                setData(f.data);
            }
            getName();
        }
        
    },[clicked])

    // const FetchFromApi = async () => {
    //     // return FetchAPI();
    //     const f = await axios.get(url);
    //     setData(f.data);
    //     return data.title;
    // }

    return (
        <div>
            <button onClick={toggle}>
                {clicked ? "hide data" : "display data" }
            </button>
            <br/>
            {clicked ? data.title : "" }
        </div>
    )
}
