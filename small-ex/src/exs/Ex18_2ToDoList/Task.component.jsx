import React from 'react'

export default function Task(props) {
    const showCompleted = () => {
        return props.completed ? <>&#x02713;
        </> : <>&#x02717;</>;
    }

    return (
        <div>
            <p onClick={props.onClick}>
                <span>{showCompleted()}</span>
                {props.taskText}
            </p>
        </div>
    )
}
