import React from 'react'
import ResponsiveAppBar from '../components/Header/UpdateHeader'
import Footer from '../components/Footer'
import Content1 from '../components/JobSingle/Content1'

const JobSingle = () => {
  return (
    <div>
        <ResponsiveAppBar/>
        <Content1/>
        <Footer/>
    </div>
  )
}

export default JobSingle