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
    <div className="allRegistration">

<form className="allFormRegistration" onSubmit={(event) => event.preventDefault()}>

      <label className="labelRegistration">
      Email:
        <input
          className="inputRegistraion"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='Email'
        />
      </label>
  
      <label className="labelRegistration">    
      Password:
        <input
          className="inputPasswordRegistration"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='password'
        />
      </label>
        <button className="buttonRegistration" type="submit" onClick={handleSubmit}>Зарегистрироваться</button>

          <Link className='linkLoginRegistration' to='/login'> Уже зарегистрированы? </Link>

    </form>

    </div>
  );
};
