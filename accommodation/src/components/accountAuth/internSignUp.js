import React, { useState } from "react";
import "./internSignUp.css";
import logo from "../../images/cgLogo.png";
import vector from "../../images/alert.svg";

const InternSignUp = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [aadhar, setAadhar] = React.useState("");
  const [uniEmail, setUniEmail] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [uniNane, setUniName] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, aadhar, uniEmail, contact, uniNane);
    window.location.href = `/internverified`;
  };

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

        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-6">
              <p className="space">First Name</p>
              <input
                type="text"
                className="form-control internSignup-form"
                placeholder="First"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-6">
              <p className="space">Last Name</p>
              <input
                type="text"
                className="form-control"
                placeholder="Last"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12">
              <p className="space">Aadhar Card Number</p>
              <input
                type="text"
                className="form-control"
                placeholder="--- ---- ----"
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
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
                value={uniEmail}
                onChange={(e) => setUniEmail(e.target.value)}
              />
            </div>
          </div>

          <div
            className="row mb-4  mt-1 w-100 "
            style={{ marginLeft: "0.30%" }}
          >
            <div
              className="col-12 d-flex "
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
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>

          <div className="row" style={{ marginBottom:'0.75rem' }}>
            <div className="col-12">
              <p className="space">University / College</p>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your University/College"
                value={uniNane}
                onChange={(e) => setUniName(e.target.value)}
              />
            </div>
          </div>

          <div
            className="row mt-1 w-100 "
            style={{ marginLeft: "0.30%" , marginBottom:'2.25rem' }}
          >
            <div
              className="col-12 d-flex "
              style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" }}
            >
              <img src={vector} alt="" className="img2" />
              <p className="alerttext" style={{ margin:'0.5rem'}}>
                Please enter full name of your university/college
              </p>
            </div>
          </div>

          <div className="row nspace mb-4">
            <div className="col-12 ">
              <button className="btn btn-warning w-100 mt-3">
              <p style={{fontWeight: '500' , fontFamily:'Lato', marginBottom:"0"}}>Sign Up</p>
              </button>
            </div>
          </div>
        </form>
        <div className="row mb-4">
          <a className="alink" href="/" style={{color:'#28519E' , fontWeight:'500'}}>
            Already have an account Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default InternSignUp;
