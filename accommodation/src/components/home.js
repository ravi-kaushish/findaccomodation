import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./accountAuth/login";
import Otp from "./accountAuth/otp";
import EmployeeSignUp from "./accountAuth/employeeSignUp";
import InternSignUp from "./accountAuth/internSignUp";
import InternVerified from "./accountAuth/internVerified";
import LandingPage from "./landingPage/landingPage";
import Step1 from "./volunteerMultiStepForm/step1/step1";
import VolunteerMultiForm from "./volunteerMultiStepForm/volunteerMultiForm";
import ForgotPassword from "./accountAuth/forgotPassword";
import CreateNewPassword from "./accountAuth/createNewPassword";
import AvailableAccommodations from "./availableAccommodations/availableAccommodations";

import OpenRequirements from "./availableAccommodations/openRequirements";
import Nodatapage from "./availableAccommodations/noDataaPage";

import RequirementMultiStepForm from "./requirementMultiStepForm/requirementMultiStepForm";
import OpenAccommodation from "./availableAccommodations/openAccommodation2";
import ForgotPassOtp from "./accountAuth/forgotPassOtp";

import Changedpassword from "./accountAuth/changedPassword";
import Registrationsuccessful from "./accountAuth/registrationSuccessful";

import Postrequirement from "./requirementMultiStepForm/postSuccessful";
import PostSuccessful from "./requirementMultiStepForm/postSuccessful";
import InternOtp from "./accountAuth/internOpt";

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/internsignup" element={<InternSignUp />} />
        <Route path="/employeesignup" element={<EmployeeSignUp />} />
        <Route path="/internverified" element={<InternVerified />} />
        <Route path="/landingpage" element={<LandingPage  />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/form" element={<VolunteerMultiForm />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/createnewpassword" element={<CreateNewPassword />} />
        <Route path="/registrationsuccessful" element={<Registrationsuccessful />} />
        <Route path="/postrequirement" element={<Postrequirement />} />
        <Route
          path="/availableaccommodations"
          element={<AvailableAccommodations />}
        />


        <Route path="/Nodatapage" element={<Nodatapage />} />

        <Route path="/requirementform" element={<RequirementMultiStepForm />} />
        <Route path="/openaccommodation" element={<OpenAccommodation />} />


        <Route path="/changedpassword" element={<Changedpassword />} />

        <Route path="/forgotpassotp" element={<ForgotPassOtp />} />
        <Route path="/postSuccess" element={<PostSuccessful />} />
        <Route path="/internOtp" element={<InternOtp />} />
        


      </Routes>
    </Router>
  );
};

export default Home;
