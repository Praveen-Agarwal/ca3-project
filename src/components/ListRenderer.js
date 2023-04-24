import React from 'react'

export default function ListRenderer(props) {
  const [tool, setTool] = React.useState(-1);
  const hover = {
    boxShadow: '9px 4px 7px 1px',
    color: 'aqua'
  }
  return (
    <>
      <div className='title row'>
        <div className="col-md-10" style={{ borderRight: '1px solid rgba(177, 171, 171, 0.5)' }}>Task name</div>
        <div className="col-md-2">Due Date</div>
      </div>
      {props.list.map((list) => {
        return (
          <div className='box row' key={list.number} onMouseEnter={() => { setTool(list.number) }} onMouseLeave={() => { setTool(-1) }} style={tool === list.number?hover:{}}>
            <div className="task col-md-10">
              {list.title}
            </div>
            <div className="time col-md-2" style={tool === list.number?{color:'transparent'}:{}}>
              {list.date.toDateString()}
              {tool === list.number && <Overlay list={props.list} index={tool} delete={props.delete} />}
            </div>
          </div>
        )
      })}
    </>
  )
}

export function Overlay(props) {
  const copyHandle = () => {
    navigator.clipboard.writeText(props.list[Math.abs(props.index - props.list.length)].title)
  }
  const deletehandle = () => {
    props.delete(props.index)
  }
  return (
    <span className='overlay'>
      <span className="material-symbols-outlined" onClick={copyHandle}>content_copy</span>
      <span className="material-symbols-outlined" onClick={deletehandle}>delete</span>
    </span>
  )
}

