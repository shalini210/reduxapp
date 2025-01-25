import React from 'react'
import {useSelector,useDispatcher} from "react-redux"
export default function UserProfile() {
    let user = useSelector((u)=>u.user.user)
  return (
    <div>UserProfile<br></br>
     <p>username : {user.username}</p>
     <p>pwd:{user.pwd}</p>
     <p>email:{user.email}</p></div>
  )
}
