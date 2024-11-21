type buttonProps = {
    variant: 'Primary' | 'Secondary'
    children: String
} & Omit<React.ComponentProps<'button'>, 'children'>

function CustomButton({variant, children, ...rest} : buttonProps) {
  return (
    <button className={`${variant}-class`} {...rest}>Custom Button</button>
  )
}

export default CustomButton