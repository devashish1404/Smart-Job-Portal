import React from 'react'
import ResponsiveAppBar from '../components/Header/HomeHeader'
import PopularJobcategory from '../components/PopularJobcategory'
import FeaturedJobCategory from '../components/FeaturedJobCategory'
import Article from '../components/RecentNews'
import BoxWithImage from '../components/CreateAnAcc'
import Footer from '../components/Footer'
import YourComponent from '../components/QuestionCntnt'
import Testimonials from '../components/Testimonials'
import EasySteps from '../components/Easysteps'
import PopularJob from '../components/PopularJob'
import BGimage from '../components/Header/BGimage';

const Homepage = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <BGimage />
      <FeaturedJobCategory />
      <EasySteps />
      <BoxWithImage />
      {/* <PopularJobcategory/>  */}
      <PopularJob />
      <Testimonials />
      <Article />
      <YourComponent />
      <Footer />
    </div>
  )
}

export default Homepage