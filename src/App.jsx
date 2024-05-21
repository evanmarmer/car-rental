import { useState } from 'react'
import './App.css'
import Home from './Home'

function App() {
  

  return (
    <>
      <header>
        <img src='img/logo.png' alt='logo' className='logo' />

        <input type='checkbox' id='check' />
        <label for='check' class='icons'>
        <i class='bx bx-menu' id='burger'></i>
        <i class='bx bx-x' id='x'></i>
        </label>

        <nav className='navbar'>
          <a href='#home'>Home</a>
          <a href='#vehicle'>Vehicle Models</a>
          <a href='#about'>About</a>
          <a href='#testimonials'>Testimonials</a>
          <a href='#contact'>Contact</a>
          <div className='button-container'>
            <button className='sign-in'>Sign In</button>
            <button className='register'>Register</button>
          </div>
        </nav>
      </header>
      <Home/>
    
    </>
  )
}

export default App
