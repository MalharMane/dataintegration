import React from 'react'

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";


import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';


import Linechart from './Linechart';
import Barchart from './Barchart';

import "./Chart.css";


defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";


function Tableandchart() {
    return (
      <div>
           
       
  
  <div className='py-3'>
  
      <Container fluid >
        <Row >
  
          <Col sm >
          <div>
          <Card >
        <Card.Header>Production</Card.Header>
        <Card.Body>
          <Card.Title>Type : QSK-23</Card.Title>
          <Card.Text>
        
          <Table striped bordered hover size="sm">
      <thead>
        <tr>
          
          <th>Sr.No.</th>
          <th>Reading</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>157.40</td>   
        </tr>
        <tr>
          <td>2</td>
          <td>157.45</td>
        </tr>
        <tr>
          <td>3</td>
          <td>157.35</td>
        </tr>
        <tr>
          <td>4</td>
          <td>157.43</td>
        </tr>
        <tr>
          <td>5</td>
          <td>157.33</td>
        </tr>
        <tr>
          <td>6</td>
          <td>157.48</td>
        </tr>
       
       
      </tbody>
    </Table>
          

          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      </Col>
  
     
  



      <Col sm > <Card >
      <Card.Header>Bar chart</Card.Header>
      <Card.Body>
        <Card.Title><h6>Tolerance : 157.35 - 157.50</h6></Card.Title>
        <Card.Text>
        

        <div className="dataCard barchartCard">
     <Bar
          data={{
            labels: ["1", "2", "3", "4", "5", "6", "7"],
            datasets: [
              {
                label: "Production",
                data: [40, 45, 35, 43, 33, 40 ],

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

        </Card.Text>
      </Card.Body>
    </Card>
    </Col>



  
  
      
  
          <Col sm >
          <div >
          <Card >
        <Card.Header>Line chart</Card.Header>
        <Card.Body>
          <Card.Title><h6>Tolerance : 157.35 - 157.50</h6></Card.Title>
          <Card.Text>
          


          <div className="dataCard barchartCard">
     <Line
          data={{
            labels: ["1", "2", "3", "4", "5", "6", "7"],
            
            datasets: [
              {
                label: "Production",
                data: [40, 45, 35, 43, 33, 40],

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




          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      </Col>
  
        </Row>
      </Container>
  
  </div>
                   
  
  
  
      
  
  
  
  
  </div>
    )
  }
  
  
  export default Tableandchart ;