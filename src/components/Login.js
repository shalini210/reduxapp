import axios from 'axios';
import React from 'react'
import {useState,useRef} from 'react'
import { API_URL } from '../config';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice';
import {useNavigate} from "react-router-dom"
export default function Login() {
    const [msg,setmsg] = useState("");
    let emailRef = useRef("")
    let pwdRef = useRef("")
    let dispatch = useDispatch()
    let navigate = useNavigate();
    const loginfun=()=>
    {
        let email = emailRef.current.value
        let pwd = pwdRef.current.value
        let data = {email:email,pwd:pwd};
        axios.post(API_URL+"user/login/",data)
        .then((d)=>
        {
            if(!d.data)
                 {
                setmsg("invalid user")
              }
              else
              {
                console.log(d.data[0])
                dispatch(setUser(d.data[0]))
                navigate("/userprofile")
                setmsg("will login ")
              }
        })
        .catch((e)=>console.log(e))
    }
  return (
    <div>Login:
        <label>Email : <input type="text" ref={emailRef}/></label>
        <label>Password : <input type="text" ref={pwdRef}/></label>
        <input type="button" value="Login" onClick={()=>loginfun()}/>
        <p>{msg}</p>
    </div>
  )
}
