import React from 'react'


import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import Button from 'react-bootstrap/Button';

import Nav from 'react-bootstrap/Nav';

import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';


import Linechart from './Linechart';
import Barchart from './Barchart';
import Doughnutchart from './Doughnutchart';

import "./Chart.css";


defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";



const Dynamiccharts = () => {
  return (
    <div className='pb-3'>

<Container>
      <Row>
      
        <Col sm>

        <Card >
        <Card.Header>Production</Card.Header>
        <Card.Body>
          <Card.Title>Type : QSK-23</Card.Title>
          <Card.Text>
        
          <Table striped bordered hover size="sm">
      <thead>
        <tr>
          
          <th>Sr.No.</th>
          <th>Readings</th>
          
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
          
        </Col>

        
        <Col sm>


        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav  className="flex-column" >
            <Nav.Item>
              <Nav.Link eventKey="first"><Button variant="primary">Bar chart</Button>{' '}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second"><Button variant="secondary">Line chart</Button>{' '}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third"><Button variant="success">Doughnut chart</Button></Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">


            <Card >
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


            </Tab.Pane>
            <Tab.Pane eventKey="second">


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


            </Tab.Pane>

            <Tab.Pane eventKey="third">

            <Card >
      <Card.Header>Doughnut chart</Card.Header>
      <Card.Body>
        <Card.Title><h6>Special title treatment</h6></Card.Title>
        <Card.Text>
        <Doughnutchart></Doughnutchart>
        </Card.Text>
      </Card.Body>
    </Card>
              
            </Tab.Pane>

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>


        </Col>
       
      </Row>
    </Container>








    </div>
  )
}

export default Dynamiccharts;