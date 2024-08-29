import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import CostCalculator from './CostCalculator'

function CostCalculatorPage() {
  return (
    <div style={{backgroundColor:"#dadee4"}}>
        <Nav/>
        <CostCalculator/>

        <Footer/>
    </div>
  )
}

export default CostCalculatorPage