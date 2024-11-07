import React from 'react';

interface userProps {
    roomNumber: number;
    isBooked?: boolean;
    visitorName: string;
    VisitorEmail?:string;
    bookedDate?: Date;
    checkInDate?: Date;
}

function RoomBooking(user:userProps) {

  return (
    <div>
      <h1>RoomBooking</h1>
      <p>Hello {user.visitorName}</p>
    </div>
    
  )
}
export default RoomBooking;