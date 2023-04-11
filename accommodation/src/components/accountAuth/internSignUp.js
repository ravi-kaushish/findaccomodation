import React from "react";
import "./internSignUp.css"
import logo from "../../images/cgLogo.png";
import vector from "../../images/alert.svg";

const InternSignUp = () => {
  return (
    <div className="container-fluid d-flex align-content-center justify-content-center p-4 mt-5">
      <div className="inner_div mt-4">
        <div className="row mb-4">
          <div>
            <div className="d-flex justify-content-center">
              <img src={logo} className="img-fluid" alt="" />
            </div>
            <div className="d-flex justify-content-center mt-3">
              <p className="heading-name" style={{ color: "black" }}>
                Lets Find Your Accommodation
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-6">
            <p className="space">First Name</p>
            <input type="text" className="form-control" placeholder="First" />
          </div>
          <div className="col-6">
            <p className="space">Last Name</p>
            <input type="text" className="form-control" placeholder="Last" />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <p className="space">Aadhar Card Number</p>
            <input
              type="text"
              className="form-control"
              placeholder="--- ---- ----"
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-12">
            <p className="space">University Email ID</p>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your University Email ID"
            />
          </div>
        </div>

        <div className="row mb-4  mt-1 hello">
          <div
            className="col-12 d-flex"
            style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" }}
          >
            <img src={vector} alt="" className="img2" />
            <p className="mb-2 mt-2 alerttext" style={{ color: "black" }}>
              This email account will be used to send password instructions
            </p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <p className="space">Contact Number</p>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Contact Number"
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <p className="space">University / College</p>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your University/College"
            />
          </div>
        </div>

        <div className="row nspace mb-4">
          <div className="col-12 butn">
            <button className=" py-1 px-3">Sign Up</button>
          </div>
        </div>

        <div className="row mb-4">
          <a className="alink" href="/Login">
            Already have an account Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default InternSignUp;
