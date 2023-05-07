import React, { useState } from "react";
import "./internSignUp.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/cgLogo.png";
import vector from "../../images/alert.svg";

const InternSignUp = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [aadharCard, setAadharCard] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [college, setCollege] = React.useState("");

  const navigate = useNavigate();
  const handleInternSignUp = (event) => {
    event.preventDefault();


    axios
      .post("https://cg-accommodation.azurewebsites.net/registerIntern", {
        firstName,
        lastName,
        aadharCard,
        email,
        contact,
        college
  
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", email);
        navigate("/internOtp");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
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

        <form onSubmit={handleInternSignUp}>
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
                value={aadharCard}
                onChange={(e) => setAadharCard(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

          <div className="row" style={{ marginBottom: "0.75rem" }}>
            <div className="col-12">
              <p className="space">University / College</p>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your University/College"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
            </div>
          </div>

          <div
            className="row mt-1 w-100 "
            style={{ marginLeft: "0.30%", marginBottom: "2.25rem" }}
          >
            <div
              className="col-12 d-flex "
              style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" }}
            >
              <img src={vector} alt="" className="img2" />
              <p className="alerttext" style={{ margin: "0.5rem" }}>
                Please enter full name of your university/college
              </p>
            </div>
          </div>

          <div className="row nspace mb-4">
            <div className="col-12 ">
              <button
                className="btn btn-warning w-100 mt-3"
                onClick={handleInternSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className="row mb-4">
          <Link className="alink" to="/">
            Already have an account Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternSignUp;
