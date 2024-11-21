import {useReducer} from 'react'
import '../App.css'
const initialState = {count: 5, user:'XXXX', status:'Initial'}

type counterState = {
    count: number,
    user: string,
    status: string
}

type updateAction = {
    type: 'increment' | 'decrement',
    payload: number
}

type resetAction = {
    type: 'reset'
}

type counterAction = updateAction | resetAction

const reducer = (state:counterState, action:counterAction) => {
    switch(action.type) {
        case 'increment':
            return {count: state.count + action.payload, user: 'Rupa', status: 'increased'}
        case 'decrement':
            return {count: state.count - action.payload, user: 'XXXX', status: 'decreased'}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Number: {state.count}, User: {state.user}, Status: {state.status}</h1>
            <button onClick={() => dispatch({type: 'increment', payload:10})}>+</button>
            <button onClick={() => dispatch({type: 'decrement', payload:5})}>-</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
        
    )
}

export default Counter
