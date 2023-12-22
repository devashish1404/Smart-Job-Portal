import React from 'react'
import ResponsiveAppBar from '../components/Header'
import Footer from '../components/Footer'
import CandidateSingle from '../components/CandidateSingle1/CandidateSingle'

const CandidateSingle1 = () => {
  return (
    <div>
        <ResponsiveAppBar/>
        <CandidateSingle/>
        <Footer/>
    </div>
  )
}

export default CandidateSingle1