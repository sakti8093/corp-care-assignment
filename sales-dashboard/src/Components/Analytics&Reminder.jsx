import React from 'react'
import '../CSS/AnalyticsReminder.css'
import remimage from '../svgs/remimage.svg'

export const AnalyticsandReminder = () => {
  return (
    <div className='analytic-reminder'>
            <div className='analytic'>
              <p>Analytics</p>
                <div className='graph'>
                    
                </div>
            </div>
            <div className='reminder_parent'>
                    <p>Reminder</p>
                    <div className='reminder'>
                        <div >
                            <p>Agency Design Kit</p>
                        </div>
                        <img src={remimage} alt="" />
                        <p>Will be published</p>
                        <p> Nov 25,2022</p>
                        <div >
                            <p>Set as Reminder</p>
                        </div>
                    </div>
            </div>
    </div>
  )
}
