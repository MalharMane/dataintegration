import React from 'react'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

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



function Barchart() {
  return (
    <div>
    

     
     <div className="dataCard barchartCard">
     <Bar
          data={{
            labels: [
                'Bore',
    'Groove',
    'Dish dia',
    'Designing',
    'OD tool',
    'Ball pin',
    'Circlip'],
            datasets: [
              {
                label: "Revenue",
                data: [200, 300, 400, 500, 600, 700],

                  backgroundColor: [
                  'rgba(218, 37, 32, 0.32)',
                  'rgba(102, 198, 171, 0.8)',
                  'rgba(169, 198, 102, 0.8)',
                  'rgba(236, 245, 83, 0.8)',
                  'rgba(245, 83, 112, 0.8)',
                  'rgba(83, 236, 245, 0.8)',
                  'rgba(201, 203, 207, 0.2)'
                                  ],

             },
            ]
          }}
        />

     </div>

    
    
</div>



  
  )
}

export default Barchart ;