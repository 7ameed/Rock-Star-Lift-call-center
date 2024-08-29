import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom';

function Service() {
  return (
    <div>
        <Container fluid d-flex className='cards'  >
            <h2>SERVICES</h2>
            <Row>
                <Col md='3'>
                <div class="card">
  <img src="./images/customer1.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">COLD CALLING</h5>
    <p class="card-text">OUR COLD CALLING SERVICE IS DESIGNED TO HELP <br/>YOU REACH NEW PROSPECTS</p>
    <Link to="/CostCalculator"><button class="button-33" role="button">See Costs</button>
    </Link>



  </div>
</div>

                </Col>
                <Col md='3'>
                <div class="card">
  <img src="./images/customer2.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">APPOINTMENT SETTING</h5>
    <p class="card-text">APPOINTMENT SETTING IS A CRUCIAL STEP IN THE SALES PROCESSAND </p>
    <Link to="/CostCalculator"><button class="button-33" role="button">See Costs</button>
    </Link>
  </div>
</div>

                </Col>
                <Col md='3'>
                <div class="card">
  <img src="./images/customer3.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">CUSTOMER SERVICE</h5>
    <p class="card-text">EXCEPTIONAL CUSTOMER SERVICE IS AT THE HEART OF EVERY SUCCESSFUL BUSINESS. </p>
    <Link to="/CostCalculator"><button class="button-33" role="button">See Costs</button>
    </Link>
  </div>
</div>

                </Col>
                <Col md='3'>
                <div class="card">
  <img src="./images/customer4.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">B2B SALES</h5>
    <p class="card-text">OUR B2B SALES SOLUTIONS ARE SPECIFICALLY DESIGNED TO HELP YOU SUCCEED IN THE BUSINESS </p>
    <Link to="/CostCalculator"><button class="button-33" role="button">See Costs</button>
    </Link>
  </div>
</div>

                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Service