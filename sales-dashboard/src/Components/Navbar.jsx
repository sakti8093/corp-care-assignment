import React from 'react'
import '../CSS/navbar.css'
import hi from '../svgs/hi.svg'
import search from '../svgs/search.svg'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-first'>
            <p>Hello,John</p>
            <img src={hi}/>
        </div>
        <div className='nav-second'>
            <img src={search} alt="" />
            <input placeholder='            Search' />
        </div>
        {/* <div>
            <img src={messages} alt="" />
            <img src={box} alt="" />
            <img src={profile} alt="" />
        </div> */}
    </div>
  )
}

