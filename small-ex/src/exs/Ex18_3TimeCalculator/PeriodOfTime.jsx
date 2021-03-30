import React from 'react'

export default function PeriodOfTime(props) {
const onChangeHandler = () => {
    
}

    return (
        <div>
            <label>{props.name} </label>
            <input type="number" onChange={onChangeHandler}/>
        </div>
    )
}
