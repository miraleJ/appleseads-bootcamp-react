import React, { useState, useEffect } from 'react'
import './style.css'

export default function Task(props) {
    const [cName, setClassName] = useState('completed');

    useEffect(() => {
        props.completed ? setClassName('completed') : setClassName('notcompleted')
      }, []);

    const showCompleted = () => {
        return props.completed ? <>&#x02713;
        </> : <>&#x02717;</>;
    }

    const handle = (event) => {
        cName === 'notcompleted' ? setClassName('completed') : setClassName('notcompleted')
        props.onClick(event);
    }

    return (
        <div>
            <p onClick={handle} className={cName}>
                <span>{showCompleted()}</span>
                {props.taskText}
            </p>
        </div>
    )
}
