import React from 'react'
import '../CSS/AnalyticsReminder.css'
import remimage from '../svgs/remimage.svg'
import { Line } from 'react-chartjs-2';
import {Chart as Chartjs} from 'chart.js/auto'



export const AnalyticsandReminder = () => {


  return (
    <div className='analytic-reminder'>
            <div className='analytic'>
              <p>Analytics</p>
                <div className='graph'>
                  <Line  options={{scales:{y:{beginAtZero:"true",grid:{display:false}},x:{grid:{display:false}}}}}  height={180} data={{
                    labels:["nov1","nov4","nov8","nov12","nov16"],
                    datasets:[{
                      label:"november",
                      fill:true,
                      data:[30,15,35,25,40],
                      tension:0.3
                    }]
                  }} />
                    
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
