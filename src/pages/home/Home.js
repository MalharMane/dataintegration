import React from 'react'

import chart from './Linechart';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './Menonpiston .jpg';


import Card from 'react-bootstrap/Card';

import Linechart from './Linechart';
import Barchart from './Barchart';
import Doughnutchart from './Doughnutchart';
import Polarchart from './Polarchart';
import Navhead from './Navhead';
import Tableandchart from './Tableandchart';
import Infoaboutjob from './Infoaboutjob';

import "./Chart.css";



function Home() {
  return (
    <div>
     
<div><Navhead></Navhead></div>



<div className='ps-4 pb-4 '>

<Container fluid>
      <Row className="justify-content-md-center">
        <Col >

        <img src={img1} alt=""/>
          
        </Col>
           
      </Row>
    
    </Container>


</div>


<div className='p-5'><Infoaboutjob></Infoaboutjob></div>


     <div>

<Container>
      <Row className="justify-content-md-center">
        <Col xs lg="16">

        <Linechart></Linechart>
          
        </Col>
           
      </Row>
    
    </Container>

</div>



<div> <Tableandchart></Tableandchart></div>


     

<div className='py-3'>

    <Container fluid >
      <Row >

        <Col sm >
        <Card>
      <Card.Header>Bar chart</Card.Header>
      <Card.Body>
        <Card.Title><h6>Special title treatment</h6></Card.Title>
        <Card.Text>
        <Barchart></Barchart>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

   

<Col sm > <Card >
      <Card.Header>Doughnut chart</Card.Header>
      <Card.Body>
        <Card.Title><h6>Special title treatment</h6></Card.Title>
        <Card.Text>
        <Doughnutchart></Doughnutchart>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    

        <Col sm >
        <Card >
      <Card.Header>Polar chart</Card.Header>
      <Card.Body>
        <Card.Title><h6>Special title treatment</h6></Card.Title>
        <Card.Text>
        <Polarchart></Polarchart>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

      </Row>
    </Container>

</div>
                 



    




</div>
  )
}

export default Home ;