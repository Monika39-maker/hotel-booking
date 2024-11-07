

type roomProp = {
  roomNumber: number,
  user: string,
  bookedDate: string,
  checkedInDate: string
}
function Rooms(props:roomProp) {
  return (
    <table>
      <thead>
        <tr>
          <th>Room Number</th>
          <th>Visitor name</th>
          <th>Booked date</th>
          <th>Checked in date</th>
        </tr>
      </thead>
      <tbody>
       
          <tr key={props.roomNumber}>
            <td>{props.roomNumber}</td>
            <td>{props.user}</td>
            <td>{props.bookedDate}</td>
            <td>{props.checkedInDate}</td>
          </tr>
       
      </tbody>
    </table>
  )
}

export default Rooms