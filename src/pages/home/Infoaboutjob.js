import Accordion from 'react-bootstrap/Accordion';

function Infoaboutjob() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Job Inspection</Accordion.Header>
        <Accordion.Body>
        Piston inspection involves measuring key dimensions to ensure proper engine
         function. Readings include diameter at various points, 
         such as the skirt, top, and ring grooves, ensuring tolerances are within 
         specifications for optimal performance and durability
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Precautions to be taken </Accordion.Header>
        <Accordion.Body>
        Cleanliness: Ensure the piston and measuring tools are clean to avoid erroneous readings or scratching the piston surface
        Precision Tools: Use calibrated and appropriate measuring instruments to ensure accurate readings
        Handling: Handle the piston carefully to avoid dropping or damaging it, which could affect measurements and performance.
        Temperature: Measure pistons at room temperature whenever possible to avoid thermal expansion inaccuracies
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Infoaboutjob ;