import { useState } from 'react'
import './Home.css'

function Home() {
  

  return (
    <>
        <img src='img/hero.png' alt='logo' className='hero' />

        <div className='text-container1'>
            <h1>Plan your trip now</h1>
            <h2>Save <span id='big'>big</span> with our <br></br>car rental</h2>
            <p>Rent the car of your dreams. Unbeatable prices. Unlimited miles.<br></br>
            Flexible pick-up and much more</p>
        </div>

        <div className='buttons1'>
        <button className='book'>Book Ride</button><button className='learn'>Learn More</button>
        </div>
    </>
  )
}

export default Home
