import React from 'react'
import {useSelector} from "react-redux"
export default function Footer() {
    let x = useSelector((s)=>s.counter.count)
  return (
    <div>footer count is : {x}</div>
  )
}
