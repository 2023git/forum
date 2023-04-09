import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { register, checkIsAuth } from "../redux/auth";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "../styles/registration.css";

export const Registration = () => {

  const [email,  setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { status } = useSelector((state) => state.auth)
  const isAuth = useSelector(checkIsAuth)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {

      if (status) {
          toast(status)
      }
      
      if (isAuth) navigate('/')
  }, [status, isAuth, navigate])

  const handleSubmit = () => {
      try {
          dispatch(register({ email, password }))
          setPassword('')
          setEmail('')
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <form className="form" onSubmit={(event) => event.preventDefault()}>
      <label className="label">
        Имя пользователя:
        <input
         className="inputOne"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='Email5'
        />
      </label>
  
      <label className="label">
        Пароль:
        <input
         className="inputTwo"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='password'
          
        />
      </label>

      <div  className='regOne'>
        <button className="buttonRegistration" type="submit" onClick={handleSubmit}>Зарегистрироваться</button>
     
      </div>
      
      <div  className=''> 
          <Link className='linkLogin' to='/login'> Уже зарегистрированы? </Link>
        </div>
    </form>
  );
};
