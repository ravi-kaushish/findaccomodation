import React from "react";
import {
  MainContainer,
  LeftContainer,
  RightContainer,
  BuildingImage,
} from "./loginStyle";
import "./login.css";
import cgLogo from "../../images/cgLogo.png";
import building from "../../images/cgBuilding.svg";

const Login = () => {
  return (
    <MainContainer
      className="container main-container "
      style={{ padding: "0" }}
    >
      <div className="row main-row " style={{ height: "552px" }}>
        <LeftContainer
          className="col-6 left-container  d-sm-flex d-none "
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
          className="col-12 col-sm-6 right-container "
          style={{ boxShadow: "0px 4px 10px rgba(46, 72, 87, 0.18)"}}
        >
          <div className="row" style={{ padding: "0 4%" }}>
            <div className="col-12 text-center mb-4 mt-5">
              <img className="img-fluid" src={cgLogo} />
              <h4 className="main-heading mt-3">
                Let's Find Your Accommodation
              </h4>
              <p  style={{color:"black"}} className=" d-sm-none d-flex">
                This is an online platform that helps other to find
                accommodation
              </p>
             
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
            <button className="btn btn-warning w-100 mt-3">Login</button>
          </div>
          <div className="container text-center" style={{ marginTop: "5%" }}>
            <a href="#" className="link-primary">
              Forgot Password?
            </a>
          </div>
          <div
            className="w-100 text-center"
            style={{
              backgroundColor: "#E9ECEB",
              position: "relative",
              top: "3%",
            }}
          >
            <p style={{ color: "black" }}>First time user? Sign Up </p>
            <a href="#" className="link-primary">
              CGI Employees
            </a>
            <span> | </span>
            <a href="#" className="link-primary">
              CGI Interns
            </a>
          </div>
        </RightContainer>
      </div>
    </MainContainer>
  );
};

export default Login;
