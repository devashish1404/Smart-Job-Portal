import React from 'react'
import ResponsiveAppBar from '../components/Header/UpdateHeader'
import Footer from '../components/Footer'
// import CandidateList1Cnt from '../components/CandidateList1/Content'
import Content from '../components/CandidateList1/Content'

const CandidateList1 = () => {
  return (
    <div>
        <ResponsiveAppBar/>
        {/* <CandidateList1Cnt/> */}
        <Content/>
        <Footer/>
    </div>
  )
}

export default CandidateList1