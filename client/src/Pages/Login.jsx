import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, login } from '../redux//auth'
import { toast } from 'react-toastify'

import "../styles/login.css";

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const { status } = useSelector((state) => state.auth)
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
      if (status) toast(status)
      if (isAuth) navigate('/')
  }, [status, isAuth, navigate])

  const handleSubmit = () => {
      try {
          dispatch(login({ email, password}))
      } catch (error) {
          console.log(error)
      }
  }

  return (
   <div className='AllLogin'>

<form className="AllFormLogin" onSubmit={(event) => event.preventDefault()}>

      <label className="labelLogin">
        Email:
        <input
          className="inputLogin"
          type="text"
          value={email}
          placeholder='Email'
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      
      <label className="labelLogin">
        Password:
        <input
          className="inputLoginPassword"
          type="password"
          value={password}
          onChange={(event) => setpassword(event.target.value)}
          placeholder='password'
        />
      </label>
      <button className="buttonLogin" type="submit" onClick={handleSubmit}>Login</button>
  
      <Link className='linkAccountLogin' to={'/registration'}> Нет аккаунта </Link>
    </form>

   </div>
  );
  }  