import React from 'react'
import '../CSS/Recent.css'
import mobile from '../svgs/mobile.svg'
import { Line } from 'react-chartjs-2';
import {BarController, Chart as Chartjs} from 'chart.js/auto'
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
                    <div>
                        <p>Accounts Reached</p>
                        <p>11,756</p>
                            <div>
                                <p>Day</p>
                                <p>Week</p>
                                <p>Month</p>
                                <p>Year</p>
                            </div>
                         </div>
                        <div>
                            <Line  options={{scales:{ y:{beginAtZero:"true",grid:{display:false},display:false},x:{grid:{display:false}}}}} height={200} data={{
                            labels:["nov 1","nov 4","nov 8","nov 12","nov 16"],
                            datasets:[{
                            label:"november",
                            fill:true,
                            data:[30,20,35,15,40],
                            tension:0.3,
                            borderColor:"#000AFF",
                            backgroundColor:"lightblue"
                            }]
                        }} />
                        </div>
                    </div>
            </div>
    </div>
  )
}
