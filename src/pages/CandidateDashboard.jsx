import React from 'react'
import ResponsiveAppBar from '../components/Header/UpdateHeader'
import Footer from '../components/Footer'
import BasicGrid from '../components/CandidateDashboard/Content'

const CandidateDashboard = () => {
  return (
    <div>
        <ResponsiveAppBar/>
        <BasicGrid/>
        <Footer/>
    </div>
  )
}

export default CandidateDashboard