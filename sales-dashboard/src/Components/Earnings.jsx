import React from 'react'
import '../CSS/earning.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import { api } from '../api';
import { useState } from 'react';
import { SpinnerDotted } from 'spinners-react';

export const Earnings = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const [graphData1,setData1]=useState([]);
  const [graphData2,setData2]=useState([]);
  const [graphLabel,setLabel]=useState([]);
  const [loading,setloading]=useState(false);

  
useEffect(()=>{
  getData();
},[])

const getData=async() => {
  try{
    setloading(true);
   let response= await fetch(`${api}/bar-graph`)
   let data=await response.json();
    setData1(data.data1);
    setData2(data.data2);
    setLabel(data.label)
    setloading(false);
  }catch(err){
    console.log(err);
    setloading(false);
  }
  
}
  



  return (

    <div className='parent-earn'>
        <p>Earnings</p>
        <div className='earn-graph'>
            <div>
              <p>Saved this month</p>
              <p>$12,81</p>
              <p>Your payment will be updated by system</p>
            </div>
            <div>
              {loading?<div className='loader'><SpinnerDotted/></div>:  <Bar width={200} height={200} options={{scales:{y:{beginAtZero:"true",grid:{display:false}},x:{grid:{display:false}}}}} data={{
                  labels:graphLabel,
                  datasets:[{
                    label:'dataset1',
                    data:graphData1,
                    barThickness:'4',
                    backgroundColor:"lightblue"
                  },
                {
                  label:'dataset2',
                  data:graphData2,
                  barThickness:'4',
                  backgroundColor:"blue"
                }]
                }} />}
            </div>
        </div>
    </div>
  )
}
