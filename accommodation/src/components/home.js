import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './accountAuth/login';
import Otp from './accountAuth/otp';
import EmployeeSignUp from './accountAuth/employeeSignUp';
import InternSignUp from './accountAuth/internSignUp';

import InternVerified from './accountAuth/internVerified';
import LandingPage from './landingPage/landingPage';


const Home = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/internsignup" element={<InternSignUp />} />
            <Route path="/employeesignup" element={<EmployeeSignUp />} />
            <Route path="/internverified" element={<InternVerified />} />
            <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
    </Router>
  )
}

export default Home