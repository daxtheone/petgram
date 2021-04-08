import React, { useContext } from 'react'
import { NotFound } from './pages/NotFound'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:id' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' noThrow to='/login' />}
        {!isAuth && <Redirect from='/user' noThrow to='/login' />}
        {isAuth && <Redirect from='/login' noThrow to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </>
  )
}
