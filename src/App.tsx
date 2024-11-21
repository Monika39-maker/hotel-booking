import { createContext, useState } from "react";
import data from './data.json'
import Rooms from './Components/Rooms';
import Login from './Components/Auth/Login';
import MyRandomNumber from "./Components/restriction/RandomNumber";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./Components/generics/List";
import Toast from "./Components/templateLiterals/Toast";
import CustomButton from "./Components/html/Button";
import Input from "./Components/html/Input";
import Text from "./Components/polymorphic/Text";
// type signInContextType = {
//   isLoggedIn: boolean,
  // setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
// }
type User = {
  email: string,
  password: string
}
const users: User[] = [
  {
    email: 'XXXXXXXXXXXXXXXXX',
    password: '123456'
  },
  {
    email: 'XXXXXXXXXXXXXX',
    password: '123456'
  }
]

export const signInContext = createContext(false);

function App() {
  
 
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
 
  return (
    <BrowserRouter>
      {/* <Routes>
        <signInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
          <Route path="/" element={isLoggedIn ? <Rooms data={data}/> : <Login />} />
        </signInContext.Provider>
        
      </Routes> */}
      <List items={['bath', 'play', 'sing']} handleClick={(item) => console.log(item)} />
      <List items={[3, 5, 7]} handleClick={(item) => console.log(item)} />
      <List items={[3, 5, 7]} handleClick={(item) => console.log(item)} />
      <List<User> items={users} handleClick={(item) => console.log(item)} renderItem={(user) => <div>{user.email}</div>}/>
      {/* only isPositive or isNegetive or isZero should be allowed */}
      <MyRandomNumber value={10} 
       isPositive 
      //  isZero -> not allowed du to restriction applied by randomNumberType 
       />
       <Toast position="center-top"/>
       <CustomButton variant="Primary" onClick={() => console.log('clicked')}>My Button</CustomButton>
        <Input type='text' />
        <div>
          <Text as='h1' size='lg'></Text>
          <Text as='p' size='md'></Text>
          <Text as='label' htmlFor='id' size='md'>Label</Text>
        </div>
    
    </BrowserRouter>
      
    
    
  
  );
}

export default App;
