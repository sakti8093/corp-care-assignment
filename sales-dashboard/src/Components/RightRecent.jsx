import React from 'react'
import '../CSS/rightRecent.css'
import people from '../svgs/people.svg'
import peopleimg1 from '../svgs/peopleimg1.svg'
import peopleimg2 from '../svgs/peopleimg2.svg'
import peopleimg3 from '../svgs/peopleimg3.svg'
import peopleimg4 from '../svgs/peopleimg4.svg'
import peopleimg5 from '../svgs/peopleimg5.svg'
import peopleimg6 from '../svgs/peopleimg6.svg'
import { useEffect } from 'react';
import { api } from '../api';
import { useState } from 'react';
import { SpinnerDotted } from 'spinners-react';

export const RightRecent = () => {

  return (
    <div className='right-recent-parent'>
        <p>Recent Transactions</p>
        <div className='right-recent-child' >
            <div>
                <img src={people} alt="" />
                <p>Transfer to your team</p>
            </div>
            <div>
                <p><span>$</span>450</p>
                <button>Transfer</button>
            </div>
            <div></div>
            <div>
                <img src={peopleimg1} alt="" />
                <img src={peopleimg2} alt="" />
                <img src={peopleimg3} alt="" />
                <img src={peopleimg4} alt="" />
                <img src={peopleimg5} alt="" />
                <img src={peopleimg6} alt="" />
            </div>
        </div>
    </div>
  )
}
