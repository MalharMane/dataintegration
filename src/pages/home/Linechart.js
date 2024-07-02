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



function Linechart() {
  return (
    <div>
    

     
     <div className="dataCard linechartCard">
     <Line
          data={{
            labels: ["a", "b", "c", "d", "e", "f", "g", "e", "f", "g", "e", "f", "g",  "d", "e", "f", "g"],
            
            datasets: [
              {
                label: "Revenue",
                data: [300, 240, 500, 230, 400, 130, 700, 800, 400, 230, 700, 800, 500, 300, 240, 500, 230],

                backgroundColor: "#e0ea5",
                borderColor: "#16d2e1",

                                  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },

             },
            ]
          }}
        />

     </div>

    
    
</div>



  
  )
}

export default Linechart ;