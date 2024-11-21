import {useState} from 'react'

type user = {
    name: string,
    age: number
}


function Login() {
    
    const [user, setUser] = useState<user | null>(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const handleLogin = () => {
        
        setIsLoggedIn(!isLoggedIn)
        setUser({
            name: 'John',
            age: 30
        })
        
    }
    

    return (
        <div>
            <button type="submit" onClick={handleLogin}>Sign in</button>
            {isLoggedIn ? <h1>Hi {user?.name}, you are {user?.age} years old. </h1> : null}
        </div>
        
        
    )
}

export default Login
