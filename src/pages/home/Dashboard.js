import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import "./Chart.css";


function Dashboard() {
  return (
<div class="border border-primary">
    <div className='p-3 '>



    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
    <Row >
      

    <Container >
      <Row >
        <Col sm={2} className=' bgcolorfordashboardmenu'>   <Nav   className="flex-column">
   
   <Stack gap={0}  >
   <div  > <Nav.Item >
         <Nav.Link eventKey="first" className='pb-0'><Button  variant="outline-secondary">hffyuyutyutel</Button></Nav.Link>
       </Nav.Item>
       </div>
   <div > <Nav.Item >
         <Nav.Link eventKey="second" className='pb-0'><Button variant="outline-secondary">Cancel</Button></Nav.Link>
       </Nav.Item>
       </div>
       <div > <Nav.Item>
         <Nav.Link eventKey="third" className='pb-0' ><Button variant="outline-secondary">Cancel</Button></Nav.Link>
       </Nav.Item>
       </div>
   
 </Stack>
 </Nav>
 </Col>

 
        <Col sm={10} className=' bgcolorfordashboardcontent' > <Col sm={9}  >
        <Tab.Content >
          <Tab.Pane eventKey="first">First tab content</Tab.Pane>
          <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
        </Tab.Content>
      </Col>
      </Col>
      </Row>
    </Container>

     
    </Row>
  </Tab.Container>

  </div>

</div>

  );
}

export default Dashboard ;