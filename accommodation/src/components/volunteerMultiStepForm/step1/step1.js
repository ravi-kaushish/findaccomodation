import React, { useContext, useState } from "react";
import { Container, Wrapper ,FormContainer,Header,Body} from "../../utilityStyles/utilityStyles";
import alert from "../../../images/alert.svg";
import camera from "../../../images/camera.svg";
import "./step1.css";
import { MultiStepContext } from "../../stepContext/stepContext";
import dummyProfile from "../../../images/dummyProfile.svg";
import styled from "styled-components";



const Step1 = () => {
  const { currentIndex, finalData, next, userData, setUserData } =
    useContext(MultiStepContext);
  const [nearbyAccommodation, setNearbyAccomodation] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    CGI: "",
    ContactInfo: "",
    NearbyAccommodationAvailable: "",
  });

  function setData() {
    console.log(userData);
    setUserData({ ...userData, personalInfo });
  }

  function checkHandler(e) {
    e.target.checked
      ? setNearbyAccomodation(true)
      : setNearbyAccomodation(false);
    setPersonalInfo({
      ...personalInfo,
      NearbyAccommodationAvailable: nearbyAccommodation,
    });
  }

  return (
    <>
      {/* <div
      className="container d-flex align-content-center justify-content-center "
      style={{ padding: "0" }}
    >
      <div className="">
        <div className="row">
          <div>
            <p
              className=""
              style={{
                color: "#626262",
                font: "Lato",
                fontSize: "16px",
                padding: "0px",
                marginBottom:"0.25rem"
              }}
            >
              Step 1
            </p>

            <p className="Step1__p-color" style={{marginTop:"0.5rem"}}>Personal Information</p>
            <hr style={{margin:"0.5rem 0 1.5rem"}}/>
          </div>
        </div>

        <form>
          <div className="row ">
            <div className="col-3" style={{ paddingLeft: "1.5rem" }}>
              <img src={dummyProfile} />
            </div>

            <div className="col-6" style={{ paddingLeft: "1.25rem" }}>
              <p className="p_color mb-1">John Doe</p>
              <p className="p_color">johndoe@example.com</p>
              
              <button className="d-flex imgButn">
                <div className="me-2 d-flex align-items-baseline">
                  <img src={camera} />
                </div>
                <div className="ms-1">
                  <p className="">Upload Image</p>
                </div>
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
                className="form-control"
                value={userData["CGI"]}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, CGI: e.target.value })
                }
              />
            </div>
          </div>

          <div className="row" style={{ marginTop: "1.5rem" }}>
            <div className="col">
              <p className="p_color" style={{ marginBottom: "0.375rem" }}>
                Contact No.
              </p>
              <input
                type="number"
                placeholder="****"
                className="form-control"
                value={userData["ContactInfo"]}
                onChange={(e) =>
                  setPersonalInfo({
                    ...personalInfo,
                    ContactInfo: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="row " style={{ marginTop: "1.5rem" }}>
            <div className="d-flex justify-content-between">
              <div>
                <p className="p_color" style={{ width: "fit-content" }}>
                  Accommodations are currently available near me
                </p>
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  checked={userData["NearbyAccommodationAvailable"]}
                  onChange={(e) => {
                    checkHandler(e);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="d-flex justify-content-between">
              <div>
                <p className="p_color">I am looking for a roommate</p>
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="d-flex justify-content-between">
              <div>
                <p className="p_color">I am looking for a flatmate</p>
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </div>

          <div className="row mb-4  mt-1">
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
                Flat-mate indicate having a separate room and Roommate indicate
                sharing same room with other
              </p>
            </div>
          </div>

          <div className="row d-flex justify-content-end">
            <div className="col-6 ">
              <button
                onClick={() => {
                  next();
                  setData();
                }}
                className="border-0 butn "
                style={{width :"100%"}}
              >
                Save & Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div> */}
      <FormContainer>
        <Header>
          <p
            style={{
              margin: "0",
              marginBottom: "0.25rem",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "19px",

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
              fontSize: "20px",
              lineHeight: "24px",
            }}
          >
            Personal Information
          </p>
          <hr style={{ margin: "0" }} />
        </Header>
        <Body >
          <form >
            <div className="row ">
              <div className="col-3" style={{ paddingLeft: "1.5rem" ,paddingRight:"0"}}>
                <img src={dummyProfile} />
              </div>

              <div className="col-6" style={{ }}>
                <p className="p_color" style={{marginBottom:"0"}}><strong>John Doe</strong> </p>
                <p className="p_color">johndoe@example.com</p>
                {/* <input type="file" /> */}
                <button className="d-flex imgButn">
                  <div className="me-2 d-flex align-items-baseline">
                    <img src={camera} />
                  </div>
                  <div className="ms-1">
                    <p className="">Upload Image</p>
                  </div>
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
                  className="form-control"
                  value={userData["CGI"]}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, CGI: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="row" style={{ marginTop: "1.5rem" }}>
              <div className="col">
                <p className="p_color" style={{ marginBottom: "0.375rem" }}>
                  Contact No.
                </p>
                <input
                  type="number"
                  placeholder="****"
                  className="form-control"
                  value={userData["ContactInfo"]}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      ContactInfo: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="row " style={{ marginTop: "1.5rem" }}>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="p_color" style={{ width: "fit-content" }}>
                    Accommodations are currently available near me
                  </p>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    checked={userData["NearbyAccommodationAvailable"]}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="p_color">I am looking for a roommate</p>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="p_color">I am looking for a flatmate</p>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-4  mt-1">
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

            <div className="row d-flex justify-content-end">
              <div className="col-6 ">
                <button
                  onClick={() => {
                    next();
                    setData();
                  }}
                  className="border-0 butn "
                  style={{ width: "100%" }}
                >
                  Save & Next
                </button>
              </div>
            </div>
          </form>
        </Body>
      </FormContainer>
    </>
  );
};

export default Step1;
