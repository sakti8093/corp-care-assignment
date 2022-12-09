import React from 'react'
import '../CSS/Recent.css'
import mobile from '../svgs/mobile.svg'
import { Line } from 'react-chartjs-2';
import {BarController, Chart as Chartjs} from 'chart.js/auto'
import { useEffect } from 'react';
import { api } from '../api';
import { useState } from 'react';
import { SpinnerDotted } from 'spinners-react';

export const Recent = () => {
    const [graphData,setData]=useState([]);
    const [graphLabel,setLabel]=useState([]);
    const [loading,setloading]=useState(false);

    
  useEffect(()=>{
    getData();
  },[])

  const getData=async() => {
    try{
      setloading(true);
     let response= await fetch(`${api}/line-graph2`)
     let data=await response.json();
      setData(data.data);
      setLabel(data.label)
      setloading(false);
    }catch(err){
      console.log(err);
      setloading(false);
    }
    
  }


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
                          {loading?<SpinnerDotted/>:  <Line  options={{scales:{ y:{beginAtZero:"true",grid:{display:false},display:false},x:{grid:{display:false}}}}} height={200} data={{
                            labels:graphLabel,
                            datasets:[{
                            label:"november",
                            fill:true,
                            data:graphData,
                            tension:0.3,
                            borderColor:"#000AFF",
                            backgroundColor:"lightblue"
                            }]
                            }} />}
                        </div>
                    </div>
            </div>
    </div>
  )
}
