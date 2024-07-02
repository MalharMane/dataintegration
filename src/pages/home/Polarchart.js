import React from 'react'
import { Chart as ChartJS, DoughnutController, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line , PolarArea, Radar} from "react-chartjs-2";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Chart.css";



defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";



function Polarchart() {
  return (
    <div>
    

     
     <div className="dataCard barchartCard">
     <Radar
      data ={{
        labels: [
    'Bore',
    'Groove',
    'Dish dia',
    'Designing',
    'OD tool',
    'Ball pin',
    'Circlip'
  ],

  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
      }

      }
        />

     </div>

    
    
</div>



  
  )
}

export default Polarchart ;