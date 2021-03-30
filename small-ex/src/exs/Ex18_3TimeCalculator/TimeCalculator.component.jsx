import React, { useState } from 'react'
import PeriodOfTime from './PeriodOfTime'

export default function TimeCalculator() {
    const [timePeriods, setTimePeriods] = useState(
        [
            { seconds : 0 },
            { minuts : 0 },
            { hours : 0 },
            { days : 0 },
            { weeks : 0 },
        ]
    );

    const changeHandle = (event) => {
        // change of period
        // let newState = 
        // newState[newState.findIndex(val => event.target.innerText.slice(1) === val.name)].completed = !newState[newState.findIndex(val => event.target.innerText.slice(1) === val.name)].completed;
        // setFullToDoList(newState);
    }

    return (
        <div>
            <PeriodOfTime
                name="Seconds"
                maxParts={60} 
                changeHandle={changeHandle}
            />
            <PeriodOfTime
                name="Minutes"
                maxParts={60} 
                changeHandle={changeHandle}
            />
            <PeriodOfTime
                name="Hours"
                maxParts={24} 
                changeHandle={changeHandle}
            />
            <PeriodOfTime
                name="Days"
                maxParts={7} 
                changeHandle={changeHandle}
            />
            <PeriodOfTime
                name="Weeks"
                maxParts={0} 
                changeHandle={changeHandle}
            />
        </div>
    )
}
