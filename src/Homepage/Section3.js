import React from 'react'
import { Col, Container, Row } from 'reactstrap'

function Section3() {
  return (
    <div>
           <Container fluid d-flex className='container1 sec3'>


<Row>
<Col md='6'>
        <img className='imagecontainer1 imgsec3 image-container3' src='./images/value.png'></img>
    </Col>
    <Col md='4' className='container4'> 
    <h3 className='sec3p1'>
    Our RockStars Focus :
    </h3>
    <div className='container2 sec3p1'>
    <i class="fa fa-check" aria-hidden="true"></i>
    <h5>RockstarCallers emphasizes the importance of clear and persuasive communication during cold calls.</h5>
    </div>
    <div className='container2 sec3p1 '>
    <i class="fa fa-check" aria-hidden="true"></i>
    <h5>RockstarCallers understands that successful cold calling requires thorough prospect research.</h5>
    </div>
    <div className='container2 sec3p1'>
    <i class="fa fa-check" aria-hidden="true"></i>
    <h5>RockstarCallers understands that successful cold calling requires thorough prospect research.</h5>
    </div>
    </Col>
  
</Row>
</Container>

    </div>
  )
}

export default Section3