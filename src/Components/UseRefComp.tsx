import {useRef, useEffect } from 'react';
// import '../App.css'


function UseRefComp() {
    const inputRef = useRef<HTMLInputElement>(null!)
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    
  return (
    <div>
        <input type="text" ref={inputRef} />
        
    </div>
  )
}

export default UseRefComp