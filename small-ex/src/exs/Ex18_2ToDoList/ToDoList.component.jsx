import React, { useState, useEffect } from 'react'
import Task from './Task.component'

const ToDoList = () => {
    const [fullToDoList, setFullToDoList] = useState(
        [
            { name: "CSS", completed: true },
            { name: "JavaScript", completed: true },
            { name: "Learn React", completed: false },
            { name: "Learn mongoDB", completed: false },
            { name: "Learn Node JS", completed: false },
        ]
    );

        const clickHandle = (event) => {
            // change completed
            let newState = [...fullToDoList];
            newState[newState.findIndex(val => event.target.innerText.slice(1) === val.name)].completed = !newState[newState.findIndex(val => event.target.innerText.slice(1) === val.name)].completed;
            setFullToDoList(newState);
        }

    return (
        <div>
            {fullToDoList.map((task, i) => <Task key={i} onClick={clickHandle.bind(this)} taskText={task.name} completed={task.completed} />)}
        </div>
    )
}

export default ToDoList;