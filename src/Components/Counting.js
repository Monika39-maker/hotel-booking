import {useState, useRef} from 'react'



function Counter() {
    // const [displayNumber, setDisplayNumber] = useState(0)
    const intervalRef = useRef(0)

    const handleIncrement = () => {
        // setDisplayNumber(displayNumber + 1)
        intervalRef.current++;
        console.log('Ref:', intervalRef.current)
        // console.log('State:', displayNumber)
    }
    
    return (
        <div>
            {/* <h1>Number by useState: {displayNumber}</h1> */}
            <h1>Number by useRef: {intervalRef.current}</h1>
            <button onClick={handleIncrement}>More</button>
        </div>
        
    )
}

export default Counter
