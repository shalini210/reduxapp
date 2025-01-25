import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { decrement, increment, incrementByNumber } from '../slices/counterSlice'
export default function Countercmp() {
    let c = useSelector((s)=>s.counter.count)
    let dispatch = useDispatch()
    let forincrement = ()=>
    {
        dispatch(increment())
    }
  return (
    <div>Countercmp: 
        <input type="button" value="-" onClick={()=>dispatch(decrement())}/>
        {c}
    <input type="button" value="+" onClick={()=>forincrement()}/>
    <input type="button" value="+ 5" onClick={()=>dispatch(incrementByNumber(5))}/>
    
    </div>
  )
}
