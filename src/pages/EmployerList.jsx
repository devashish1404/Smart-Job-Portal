import React from 'react'
import ResponsiveAppBar from '../components/Header/UpdateHeader'
import Footer from '../components/Footer'
import EmployerListCntnt1 from '../components/EmployerListComponents/EmployerListCntnt1'

const EmployerList = () => {
  return (
    <div>
        <ResponsiveAppBar/>
        <EmployerListCntnt1/>
        <Footer/>
    </div>
  )
}

export default EmployerList