import React, { useContext, useDebugValue, useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  FormContainer,
  Header,
  Body,
} from "../../utilityStyles/utilityStyles";
import alert from "../../../images/alert.svg";
import camera from "../../../images/camera.svg";
import "./step1.css";
import { MultiStepContext } from "../../stepContext/stepContext";
import dummyProfile from "../../../images/dummyProfile.svg";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Step1 = () => {
  useEffect(()=>{ 
    
    setIsIdValid(userData["CGI"]);
    setIsContactNumberValid(userData["contact"])
   },[] )
  const {currentIndex, setCurrentIndex,next, userData, setUserData } = useContext(MultiStepContext);

  function handleCheckboxChange(event) {
    console.log(event.target.checked);
  }

  const [id, setId] = useState();
  const [isIdValid, setIsIdValid] = useState(false);

  const [contactNumber, setContactNumber] = useState();
  const [isContactNumberValid, setIsContactNumberValid] = useState(false);

  const handleIdChange = (event) => {
      let {value} = event.target;
      value = value.toUpperCase();
      setId(value);
      setIsIdValid(/^(CGI|INT)([1-9]\d{0,3})$/.test(value)
        ? true 
        : false
      );
      setUserData({...userData, CGI : value})
      // console.log(isIdValid);     
      // console.log(id);
  }

  const handleContactChange = (event) => {
    let phoneNumber = event.target.value;
    if (phoneNumber.trim().length <= 10) {
      setContactNumber(phoneNumber.trim());
    }
    setIsContactNumberValid(
      phoneNumber.length === 0 || (phoneNumber.trim().length <= 10 && /\d{10}/.test(phoneNumber)) ? true : false
    );
    setUserData({...userData, contact: phoneNumber.trim()})
    // console.log(isContactNumberValid);     
    //   console.log(contactNumber);
    //   console.log(userData);
  };

 

  return (
    <>
      <FormContainer>
        <Header>
          <p
            style={{
              margin: "0",
              marginBottom: "0.25rem",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "1rem",
              lineHeight: "1.18rem",

              color: "#626262",
            }}
          >
            Step 1
          </p>
          <p
            style={{
              margin: "0",
              marginBottom: "0.25rem",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "1.25rem",
              lineHeight: "1.5rem",
            }}
          >
            Personal Information
          </p>
          <hr style={{ margin: "0" }} />
        </Header>
        <Body>
          <div className="container-fluid" style={{ padding: "0 0.75rem" }}>
            <form onSubmit={e => { e.preventDefault(); }}>
                <div className="row ">
                  <div className=" col-md-3">
                  <img src={dummyProfile} />
                </div>

                <div className=" col-md-5" style={{}}>
                  {/* <div>
                    <div><strong>{userData.CGI}</strong></div>
                    <div style={{marginBottom:"2%"}}>{userData.contact}</div>
                  </div>    */}
                  <p className="p_color" style={{ marginBottom: "0" }}>
                    {/* <strong>{currentUser.response[0].firstname} {currentUser.response[0].lastname} </strong> */}
                  </p>
                  {/* <p className="p_color">{currentUser.response[0].email}</p> */}
                  {/* <input type="file" /> */}
                  <button className="d-flex imgButn">
                    <div className="me-2 d-flex align-items-baseline" style={{marginTop:"3%"}}>
                      <img src={camera} />
                    </div>
                    <p className="">Upload Image</p>
                  </button>
                </div>
              </div>

              <div className="row" style={{ marginTop: "2rem" }}>
                <div className="col">
                  <p className="p_color" style={{ marginBottom: "0.375rem" }}>
                    CGI ID
                  </p>
                  <input
                    type="text"
                    placeholder="Enter your CGI ID"
                    className= { !isIdValid && id
                      ? "form-control input-error"
                      : "form-control"
                    }
                    value={userData["CGI"]}
                    onChange={(e) =>handleIdChange(e)}
                  />

                  {
                    !isIdValid && id && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                            CGI ID is not valid
                      </span>
                    )
                  }
                </div>
              </div>

              <div className="row" style={{ marginTop: "1.5rem" }}>
                <div className="col">
                  <p className="p_color" style={{ marginBottom: "0.375rem" }}>
                    Contact No.
                  </p>
                  <input
                    type="tel"
                    placeholder="****"
                    className={ !isContactNumberValid && contactNumber
                      ? "form-control input-error"
                      : "form-control"
                    }
                    value={userData["contact"]}
                    onChange={(e) => handleContactChange(e)}
                  />
                  {
                    !isContactNumberValid && contactNumber && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        Contact Number is not valid
                      </span>
                    )
                  }
                </div>
              </div>
              {console.log(userData)}
              <div className="row " style={{ marginTop: "1.5rem" }}>
                <div className="d-flex justify-content-between">
                  <div>
                    <p
                      className="p_color"
                      style={{ width: "fit-content", marginBottom: "0" }}
                    >
                      Accommodations are currently available near me
                    </p>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      checked={
                        userData["isNearBy"] == undefined
                          ? false
                          : userData["isNearBy"]
                      }
                      onChange={(e) => {
                        setUserData({
                          ...userData,
                          isNearBy: e.target.checked,
                        });
                        console.log(e.target.checked);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginTop: "1.9rem" }}>
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="p_color" style={{ marginBottom: "0" }}>
                      I am looking for a roommate
                    </p>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      checked={
                        userData["isRoomMate"] == undefined
                          ? false
                          : userData["isRoomMate"]
                      }
                      onChange={(e) => {
                        setUserData({
                          ...userData,
                          isRoomMate: e.target.checked,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginTop: "1.9rem" }}>
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="p_color" style={{ marginBottom: "0" }}>
                      I am looking for a flatmate
                    </p>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      checked={
                        userData["isFlatMate"] == undefined
                          ? false
                          : userData["isFlatMate"]
                      }
                      onChange={(e) => {
                        setUserData({
                          ...userData,
                          isFlatMate: e.target.checked,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row " style={{ marginTop: "1.625rem" }}>
                <div
                  className="col-12 d-flex "
                  style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" }}
                >
                  <img
                    src={alert}
                    alt=""
                    className="img2"
                    style={{ marginBottom: "0.5rem" }}
                  />
                  <p className="mb-2 mt-2 p_color">
                    Flat-mate indicate having a separate room and Roommate
                    indicate sharing same room with other
                  </p>
                </div>
              </div>

              <div
                className="row d-flex justify-content-end"
                style={{ marginTop: "8%" }}
              >
                <div className="col-6" style={{ padding: "0" }}>
                  <button
                    type="button"
                    // disabled={
                    //   ()
                    // }
                    onClick={(event) => {
                      event.preventDefault();
                      if(((isContactNumberValid) && (isIdValid))) {
                        // setUserData({...userData, CGI : id, contact : contactNumber})
                        // setSaveButton(true);
                        next();
                      }
                    }}
                    className="border-0 save-btn"
                    style={{ width: "100%" }}
                  >
                    <p style={{ margin: "5%" }}>Save & Next</p>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Body>
      </FormContainer>
      {/* {console.log(userData)} */}
    </>
  );
};

export default Step1;
