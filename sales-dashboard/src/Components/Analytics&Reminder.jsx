import React from 'react'
import '../CSS/AnalyticsReminder.css'
import remimage from '../svgs/remimage.svg'
import { Line } from 'react-chartjs-2';
import {Chart as Chartjs} from 'chart.js/auto'
import { useEffect } from 'react';
import { api } from '../api';
import { useState } from 'react';
import { SpinnerDotted } from 'spinners-react';




export const AnalyticsandReminder = () => {

  const [graphData,setData]=useState([]);
  const [graphLabel,setLabel]=useState([]);
  const [loading,setloading]=useState(false);

  useEffect(()=>{
    getData();
  },[])

  const getData=async() => {
    try{
      setloading(true);
     let response= await fetch(`${api}/line-graph1`)
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
    <div className='analytic-reminder'>
            <div className='analytic'>
              <p>Analytics</p>
                {loading?<SpinnerDotted/>:<div className='graph'>
                  <Line  options={{scales:{y:{beginAtZero:"true",grid:{display:false}},x:{grid:{display:false}}}}}  height={180} data={{
                    labels:graphLabel,
                    datasets:[{
                      label:"november",
                      fill:true,
                      data:graphData,
                      tension:0.3
                    }]
                  }} />
                </div>}
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
