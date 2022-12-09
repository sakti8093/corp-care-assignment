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
export const Earnings = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );



  return (
    <div className='parent-earn'>
        <p>Earnings</p>
        <div className='earn-graph'>
            <div>
              <p>saved this month</p>
              <p>$12,81</p>
              <p>Your payment will be updated by system</p>
            </div>
            <div>
                <Bar width={200} height={200} options={{scales:{y:{beginAtZero:"true",grid:{display:false}},x:{grid:{display:false}}}}} data={{
                  labels:["S","M","T","W","T","F","S"],
                  datasets:[{
                    label:'dataset1',
                    data:[20,20,20,20,20,20,20],
                    barThickness:'4',
                    backgroundColor:"lightblue"
                  },
                {
                  label:'dataset2',
                  data:[30,30,30,30,30,30,30],
                  barThickness:'4',
                  backgroundColor:"blue"
                }]
                }} />
            </div>
        </div>
    </div>
  )
}
