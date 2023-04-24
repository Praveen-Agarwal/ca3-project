import React from 'react'

export default function Sidenav(props) {
  return (
    <ul className='side-nav'>
        <li onClick={()=>{props.change("INBOX")}}>
        <div>INBOX</div>
        </li>
        <li onClick={()=>{props.change("TODAY")}}>
        <div>TODAY</div>
        </li>
        <li onClick={()=>{props.change("NEXT")}}>
        <div>NEXT 7 DAYS</div>
        </li>
    </ul>
  )
}
