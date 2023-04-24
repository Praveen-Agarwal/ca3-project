import React from 'react'
import ListRenderer from './ListRenderer'

export default function Today(props) {
    const filteredList = props.list.filter((obj)=>{
        const today = new Date();
        const date = obj.date;
        return today.getDate()===date.getDate() && today.getMonth()===date.getMonth() && today.getFullYear()===date.getFullYear();
    })

  return (
    <>
        <ListRenderer list={filteredList} delete={props.delete}/>
    </>
  )
}
