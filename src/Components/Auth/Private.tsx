import Login from "./Login"
// import { profileProps } from "./Profile"
import { useState, createContext } from "react";

type privateProps = {
  
  Component: React.ComponentType,
  
}
export const Context = createContext({isLoggedIn: false});

function Private({Component}: privateProps) {
  
  

      if (isLoggedIn) {
        return <Component />
      } else {
        return <Login isLoggedIn={isLoggedIn} handleSubmit={handleSubmit}/>
      }    
  
}

export default Private