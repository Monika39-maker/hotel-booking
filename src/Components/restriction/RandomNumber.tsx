//Restricting props

type RandomNumber = {
    value: number
    
}
type PositiveNumber = RandomNumber & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never
}
type NegativeNumber = RandomNumber & {
    isNegative?: boolean,
    isPositive: never,
    isZero?: never
}
type ZeroNumber = RandomNumber & {
    isZero?: boolean,
    isPositive: never,
    isNegative?: never 
}
type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber

function MyRandomNumber({value, isNegative, isPositive, isZero} : RandomNumberProps) {
  return (
    <div>
    
        {value} {isNegative && "Negative"} {isPositive && "Positive"} {isZero && "Zero"} {' '}
    </div>
  )
}

export default MyRandomNumber