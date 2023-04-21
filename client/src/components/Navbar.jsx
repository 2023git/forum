import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, logout } from '../redux/auth'
import { toast } from 'react-toastify'

import '../styles/navbar.css'

export const Navbar = () => {
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()

  const activeStyles = {
    color: '#540404fe',
}

  const logoutHandler = () => {
      dispatch(logout())
      window.localStorage.removeItem('token')
      toast('Вы вышли из системы')
  }

  

return (

  <div className="navbar-container">

  <div>
          {isAuth ? ( <button className='out'
          onClick={logoutHandler}>Выйти</button >) : (<Link to={'/login'} className='enter'> Войти </Link> )}   
  </div>

    {isAuth && ( 
    <ul className="navbar">
        <li className="navbar-item">

        <NavLink 
          to={'/'}
          className="navbar-link"
          style={({ isActive }) =>
              isActive ? activeStyles : undefined
        }
            >
              Main
            </NavLink>
        </li>

          <li className="navbar-item">

        <NavLink 
        to={'/postspage'}
        className="navbar-link"
        style={({ isActive }) =>
            isActive ? activeStyles : undefined
    }
        >My posts
        </NavLink>

      </li>
          <li className="navbar-link">

          <NavLink 
                to={'/addpost'}
                className="navbar-link"
                style={({ isActive }) =>
                    isActive ? activeStyles : undefined
                }
                >Add post
          </NavLink>

    </li>
        </ul>
  )}    

  </div>
    )
  }