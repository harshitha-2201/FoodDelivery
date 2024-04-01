import React, { useState } from 'react'
import Navbar from './components/Nav/Navbar'
import { Route,  Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from'./pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/Placeorder'
import Footer from './components/Footer/Footer'
import LoginPage from './components/LoginPage/LoginPage'

const App = () => {

  const [login , setLogin] = useState(false)
  return (
    <>
    {login ? <LoginPage setLogin = {setLogin}/> : <></>}
      <Navbar setLogin = {setLogin}/>
    <div className='app'>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/order' element = {<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    
    </>

  )
}

export default App