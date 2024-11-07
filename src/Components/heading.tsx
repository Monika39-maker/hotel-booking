import React from 'react'

type  props = {
    handleClick: () => void,
    style: React.CSSProperties
}

function Heading(props:props) {
  

  return (
    <div style={props.style}>
        <button className="btn btn-primary" onClick={props.handleClick}>Primary</button>
    </div>
  )
}

export default Heading