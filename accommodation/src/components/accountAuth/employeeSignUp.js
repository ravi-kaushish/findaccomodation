import React from "react";
import "./employeeSignUp.css"
import cglogo from "../../images/cgLogo.png";
import building from "../../images/cgBuilding.svg";

import {MainContainer,LeftContainer,RightContainer,BuildingImage} from "./employeeSignUpStyle"


const EmployeeSignUp = () => {
  return (
    <MainContainer
      className="container main-container "
      style={{ padding: "0" }}
    >
      <div className="row main-row " style={{ height: "552px" }}>
        <LeftContainer
          className="col-6 left-container d-sm-flex d-none"
          style={{ boxShadow: "0px 4px 10px rgba(46, 72, 87, 0.18)" }}
        >
          <div className="row" style={{ width: "85%" }}>
            <div className="col-12 text-center">
              <BuildingImage className="img-fluid" src={building} style={{}} />
              <p className="find-accomo">Find Your Accommodation</p>
              <p className="description">
                This is an online platform that helps other to find
                accommodation
              </p>
            </div>
          </div>
        </LeftContainer>
        <RightContainer
          className="col-12 col-sm-6  right-container "
          style={{ boxShadow: "0px 4px 10px rgba(46, 72, 87, 0.18)" }}
        >
          <div className="row" style={{ padding: "0 4%" }}>
            <div className="col-12 text-center mb-4 mt-5">
              <img className="img-fluid" src={cglogo} />
              <h4 className="main-heading mt-3">
                Let's Find Your Accommodation
              </h4>
            </div>
          </div>
          <div className="row" style={{ width: "100%" }}>
            <div className="col-12" style={{ padding: "0" }}>
              <div className="container w-100 g-2">
                <form>
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" />
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" />
                </form>
              </div>
            </div>
            <button className="btn btn-warning w-100 mt-3">Sign Up</button>
          </div>
          <div className="container text-center" style={{ marginTop: "5%" }}>
            <a href="#" style={{ color: "#28519E" }} className="link-primary">
              Already have an account?
            </a>
          </div>
        </RightContainer>
      </div>
    </MainContainer>
  );
};

export default EmployeeSignUp;
