import React from 'react'
import ResponsiveAppBar from '../components/Header/UpdateHeader'
import Footer from '../components/Footer'
import MyComponent from '../components/JobListingContents/JobListingCnt1'
import MainComponent from '../components/JobListingContents/JobListingCnt2'
import Featurejob from '../components/JobListingContents/Featurejob'

const JobListing = () => {
  return (
    <div>
        <ResponsiveAppBar/>
         <MyComponent/>
         {/* <MainComponent/> */}
         {/* <Featurejob/> */}
        <Footer/> 
    </div>
  )
}

export default JobListing