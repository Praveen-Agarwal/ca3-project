import React, { useState } from 'react'
import ListRenderer from './ListRenderer'
import CreateList from './CreateList.';

export default function Inbox(props) {
    const [newTask, setNewTask] = useState(false);
    const newtaskHandler = () => {
        setNewTask(true);
    }
    return (
        <>
            {!newTask && (<button className='new' onClick={newtaskHandler}><span className="material-symbols-outlined">edit</span> Create a Task</button>)}
            {newTask && <CreateList list={props.list} append={props.append} setNewTask={setNewTask} />}
            <ListRenderer list={props.list} delete={props.delete} />
        </>
    )
}
