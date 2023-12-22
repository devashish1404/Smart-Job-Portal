import React from 'react'
import ResponsiveAppBar from '../components/Header/UpdateHeader'
import Footer from '../components/Footer'
import Component1 from '../components/EmployerSingleComponents/Component1'

const EmployerSingle = () => {
  return (
    <div>
        <ResponsiveAppBar/>
        <Component1/>
        <Footer/>
    </div>
  )
}

export default EmployerSingle