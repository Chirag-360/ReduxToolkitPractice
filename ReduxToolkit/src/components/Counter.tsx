import { increment,decrement, incrementByAmount , reset } from "../features/counterSlice"
import { useDispatch , useSelector } from "react-redux"
import React, { useState } from "react"

interface CounterState {
    counter:{
        count:number
    }
}
const Counter = () => {

    const [amount , setAmount] = useState<number | string>()         
    const value = Number(amount) || 0
    const count = useSelector((state:CounterState) => state.counter.count)
    const dispatch = useDispatch()
    console.log(count)
  return (
    <div>
    <p>{count}</p>
    <button onClick={() => dispatch(increment())}> + </button>
    <button onClick={() => dispatch(decrement())}> - </button>
    <button onClick={() => dispatch(reset())}> reset</button>
    <input type="text" value={amount} onChange={(e:React.ChangeEvent<HTMLInputElement>) =>{ setAmount(e.target.value) } } />
    <button onClick={() => dispatch(incrementByAmount(value))}> incrementByAmount</button>

    </div>
  )
}

export default Counter