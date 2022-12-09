import React from 'react'
import '../CSS/rightnav.css'
import messages from '../svgs/message.svg'
import box from '../svgs/box.svg'
import profile from '../svgs/profile.svg'

export const RightNav = () => {
  return (
    <div className='rght-nav'>
            <img src={messages} alt="" />
            <img src={box} alt="" />
            <img src={profile} alt="" />
    </div>
  )
}
