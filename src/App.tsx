import './App.css';
import data from './data.json'
// import RoomBooking from './Components/roombooking';

import Rooms from './Components/Rooms';
import Heading from './Components/heading';
import Practice from './Components/Practice';


function App() {
  
  const handleClick = () => {
    console.log('clicked')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }
 
  
  return (
    <div className="App">
      <Heading handleClick={handleClick} style={{ color:'red', border: '2px solid dotted', background:'green'}}/>
       
      <Practice handleChange={handleChange} />

      {data.map((room, index:number) => (
        <Rooms key={index} user={room.VisitorName} bookedDate={room.BookedDate} checkedInDate={room.CheckInDate} roomNumber={room.RoomNumber} />
      ))}
      
      
        
    </div>
  );
}

export default App;
