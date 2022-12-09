import React from 'react'
import '../CSS/Recent.css'
import mobile from '../svgs/mobile.svg'
export const Recent = () => {
  return (
    <div className='recent'>
        <div>
            <p>Recent Transaction</p>
            <div className='mobile-transaction'>
                <div >
                    <div>
                       <img src={mobile} alt="" />
                       <div>
                         <p>Jiko Mobile App</p>
                         <p>12Nov 2021 4:45AM</p>
                       </div>
                    </div>
                     <p>$15</p>
                </div>
                <div >
                    <div>
                       <img src={mobile} alt="" />
                       <div>
                         <p>Jiko Mobile App</p>
                         <p>12Nov 2021 4:45AM</p>
                       </div>
                    </div>
                     <p>$15</p>
                </div>
                <div >
                    <div>
                       <img src={mobile} alt="" />
                       <div>
                         <p>Jiko Mobile App</p>
                         <p>12Nov 2021 4:45AM</p>
                       </div>
                    </div>
                     <p>$15</p>
                </div>
                <div >
                    <div>
                       <img src={mobile} alt="" />
                       <div>
                         <p>Jiko Mobile App</p>
                         <p>12Nov 2021 4:45AM</p>
                       </div>
                    </div>
                     <p>$15</p>
                </div>
            </div>
        </div>
        <div>
             <p>Recent Transaction</p>
                <div className='recent-graph'>

                </div>
        </div>
    </div>
  )
}
