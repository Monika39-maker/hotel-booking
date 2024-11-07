type inputProps = {
  value?: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}



function Practice(props:inputProps) {
  
  return (
    <div>
        
       <input type="text" defaultValue='' onChange={(event) => props.handleChange(event)}/>
    </div>
  )
    
}
export default Practice;