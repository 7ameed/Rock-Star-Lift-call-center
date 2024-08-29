import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

function Section1() {
  return (
    <div>
       <Container fluid d-flex className='container1'>


        <Row>
            <Col md='4' className='container4'> 
            <h3>
            Transforming Your Business with Effective Cold Calling Services
            </h3>
            <div className='container2'>
            <i class="fa fa-check" aria-hidden="true"></i>
            <h5>Generate High-Quality Leads.</h5>
            </div>
            <div className='container2'>
            <i class="fa fa-check" aria-hidden="true"></i>
            <h5>Maximize Sales Potential.</h5>
            </div>
            <div className='container2'>
            <i class="fa fa-check" aria-hidden="true"></i>
            <h5>Gain a Competitive Edge.</h5>
            </div>
            <div className='buttons1'>
       <Link to="/Service"> <button type="button" class="btn btn-light">See Services</button></Link>
        <button type="button" class="btn btn-dark">How We Work</button>
        </div>
            </Col>
            <Col md='6'>
                <img className='imagecontainer1' src='./images/about.jpg'></img>
            </Col>
        </Row>
       
       </Container>
      


    </div>
  )
}

export default Section1