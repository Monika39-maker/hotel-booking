//import and use a type from a component
import Login from "../Login"

function CustomeComponent(props: React.ComponentProps<typeof Login>) {
  return (
    <h1>Hi {props.name}</h1>
  )
}

export default CustomeComponent