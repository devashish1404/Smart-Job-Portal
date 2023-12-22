import React from "react";
import { Route, Routes } from "react-router-dom";
import Appliedjob from "../pages/AppliedJobs";
import CandidateDashboard from "../pages/CandidateDashboard";
import CandidateList1 from "../pages/CandidateList1";
import CandidateProfile from "../pages/CandidateProfile";
import ChangePassword from "../pages/ChangePassword";
import CompanyProfile from "../pages/CompanyProfile";
import Editprofile from "../pages/EditProfile";
import EmployerDashboard from "../pages/EmployerDashboard";
import EmployerList from "../pages/EmployerList";
import EmployerSingle from "../pages/EmployerSingle";
import Homepage from "../pages/Homepage";
import JobListing from "../pages/JobListing";
import JobSingle from "../pages/JobSingle";
import Logout from "../pages/Logout";
import Popups from "../pages/Popups";
import PostJob from "../pages/PostJob";
import Registeration from "../pages/Registration";
import Login from "../pages/auth/candidate/Login";
import Signup from "../pages/auth/candidate/Signup";
// import QQ from "../pages/auth/candidate/Login";
import About from '../pages/About';
import Allapplicants from "../pages/Allapplicants";
import Blog from "../pages/Blog";
import Managejobs from "../pages/Managejobs";
import Shortlisted from "../pages/Shortlisted";




const Index = () => {
    return (
        <>
            <Routes>
                {/* Routing of the Entire Project */}
                <Route path="/" element={<Homepage />} >
                </Route>
                <Route path="/job-listing" element={<JobListing />} />
                <Route path="/job-single" element={<JobSingle />} />
                <Route path="/employer-list" element={<EmployerList />} />
                <Route path="/employer-single" element={<EmployerSingle />} />
                <Route path="/employer-dashboard" element={<EmployerDashboard />} />
                <Route path="/candidate-list1" element={<CandidateList1 />} />
                {/* <Route path="/candidate-single1" element={<CandidateSingle1/>}/> */}
                <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
                <Route path="/blog-page" element={<Blog/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/job-post" element={<PostJob/>}/>
                <Route path="/edit-profile" element={<Editprofile/>}/>
                <Route path="/change-password" element={<ChangePassword/>}/>
                <Route path="/company-profile" element={<CompanyProfile/>}/>
                <Route path="/popups" element={<Popups/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/candidate-profile" element={<CandidateProfile/>}/>
                <Route path="/applied-jobs" element={<Appliedjob/>}/>
                <Route path="/registration" element={<Registeration/>}/>
                <Route path="/shortlist-resume" element={<Shortlisted />} />
                <Route path="/all-applicant" element={<Allapplicants />} />
                <Route path="/manage-job" element={<Managejobs />} />
                <Route path="/about"element={<About />} />
            </Routes>
        </>
    )
}
export default Index;