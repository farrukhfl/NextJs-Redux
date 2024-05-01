'use client'

import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useState } from "react"
import { useDispatch } from "react-redux"

function Login() {
  const[userName, setUserName] = useState("")

  const dispatch = useDispatch<AppDispatch>()
  const isAuth = useAppSelector((state)=> state.authReducer.value.isAuth)


  const onClickLogin = () => {
    dispatch(logIn(userName))
  }

  const onClickToggle = () => {
    dispatch(toggleModerator())
  }
  const onClickLogout = () => {
    dispatch(logOut())
  }


  return (
    <div>
        <input type="text" onChange={(e)=> setUserName(e.target.value)} />
        <br /> <br />
        <button onClick={onClickLogin}>Login</button>
        <br /> <br />
        <button onClick={onClickLogout}>Logout</button>
        <br /> <br />
        {isAuth && <button onClick={onClickToggle}>Toggle</button>
}


      
    </div>
  )
}

export default Login
