import React from 'react'
import ListRenderer from './ListRenderer'

export default function Next7Days(props) {
    const filteredList = props.list.filter((obj)=>{
        const today = new Date();
        const diffTime = (obj.date - today);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 7 && diffDays >= 0;
    })

  return (
    <>
        <ListRenderer list={filteredList} delete={props.delete}/>
    </>
  )
}
