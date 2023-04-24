import React, { useRef } from 'react'

export default function CreateList(props) {
    const titleRef = useRef();
    const calendarRef = useRef();
    const addHandler = (e) => {
        e.preventDefault();
        if (titleRef.current.value === "") {
            window.alert("Please enter a title");
            return;
        }
        const TodayDate = new Date(calendarRef.current.value);
        if (TodayDate.getFullYear < new Date().getFullYear || TodayDate.getMonth < new Date().getMonth || TodayDate.getDate < new Date().getDate) {
            window.alert("Please enter a valid date");
            return;
        }
        const newObj = {
            number: props.list.length > 0 ? props.list[0].number + 1 : 1,
            title: titleRef.current.value,
            date: calendarRef.current.value !== '' ? new Date(calendarRef.current.value) : new Date()
        }
        props.append(newObj);
        props.setNewTask(false);
    }
    const cancelHandler = () => {
        props.setNewTask(false);
    }
    return (
        <form className='newtask-box'>
            <div className="container1">

                <div className='col1'>
                    <div className='inputBox'>
                        <input type="text" required ref={titleRef} />
                        <span className='text'>ToDo Item Here</span>
                        <span className='line'></span>
                    </div>
                </div>
                <input className='calendar' type="date" ref={calendarRef} />
            </div>
            <div className='buttons'>
                <button className='new' onClick={addHandler}>Add Task</button>
                <button className='new' onClick={cancelHandler}>Cancel</button>
            </div>
        </form>
    )
}
