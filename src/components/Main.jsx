
import { useState } from 'react';
import Button from './Button';
const Main = () => {
  
    const [value, setValue] = useState(0);
    const increment = () => {
        setValue(value + 1)
    }
    const decrement = () => {
        setValue(value - 1)
    }
    const reset = () => {
        setValue(0)
    }
    return (
        <>
        <div className='main'>
        <marquee behavior="alternate"><h1>Counter App - React</h1></marquee>
        <hr className='hr' />
        <div className='value'>{value}</div>
            <Button key={1} title={"+"} function={increment} />
            <Button key={2} title={"Reset"} function={reset} />
            <Button key={3} title={"-"} function={decrement} />
        </div>
            
        </>
    )

}

export default Main