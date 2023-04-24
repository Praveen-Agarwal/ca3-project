import React, { useState } from 'react'
import Inbox from './Inbox'
import Today from './Today'
import Next7Days from './Next7Days'

export default function MainSection(props) {
    const [list, setList] = useState([]);
    const addToList = (obj)=>{
        setList([obj, ...list]);
    }
    const deleteFromList = (index)=>{
        const newList = list.filter((obj)=>{
            return obj.number !== index;
        })
        setList([...newList]);
    }
  return (
    <div className='main-section'>
        {props.active==="INBOX" && <Inbox list={list} append={addToList} delete={deleteFromList}/>}
        {props.active==="TODAY" && <Today list={list}  delete={deleteFromList}/>}
        {props.active==="NEXT" && <Next7Days list={list}  delete={deleteFromList}/>}
    </div>
  )
}
