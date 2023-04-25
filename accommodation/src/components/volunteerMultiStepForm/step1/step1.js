import React, { useContext, useEffect, useState } from "react";
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

const Step1 = () => {
  // useEffect(()=>{
  //   console.log("Component Mounted") },[])
  // };
  // useEffect(()=>{console.log("Componenet Mounted")},[] )

  const { currentIndex, finalData, next, userData, setUserData } =
    useContext(MultiStepContext);

  const [nearbyAccommodation, setNearbyAccomodation] = useState(false);
  useEffect(() => {
    setUserData({ ...userData, NearbyAccommodation: nearbyAccommodation });
  }, [nearbyAccommodation]);

  const [roommate, setRoommate] = useState(false);
  useEffect(() => {
    setUserData({ ...userData, Roommate: roommate });
  }, [roommate]);

  const [flatmate, setFlatmate] = useState(false);
  useEffect(() => {
    setUserData({ ...userData, Flatmate: flatmate });
  }, [flatmate]);
  // const [personalInfo, setPersonalInfo] = useState({
  //   CGI: "",
  //   ContactInfo: "",
  //   NearbyAccommodationAvailable: "",
  // });

  // function setData() {
  //   console.log(userData);
  //   setUserData({ ...userData, personalInfo });
  // }

  // function checkHandler(e) {
  //   e.target.checked
  //     ? setNearbyAccomodation(true)
  //     : setNearbyAccomodation(false);
  //   setPersonalInfo({
  //     ...personalInfo,
  //     NearbyAccommodationAvailable: nearbyAccommodation,
  //   })
  //}

  function handleCheckboxChange(event) {
    setNearbyAccomodation(event.target.checked);
  }

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
              fontSize: "1.25rem",
              lineHeight: "1.5rem",
            }}
          >
            Personal Information
          </p>
          <hr style={{ margin: "0" }} />
        </Header>
        <Body>
          <div className="container-fluid">
            <form>
              <div className="row ">
                <div className=" col-md-3">
                  <img src={dummyProfile} />
                </div>

                <div className=" col-md-5" style={{}}>
                  <p className="p_color" style={{ marginBottom: "0" }}>
                    <strong>John Doe</strong>{" "}
                  </p>
                  <p className="p_color">johndoe@example.com</p>
                  {/* <input type="file" /> */}
                  <button className="d-flex imgButn">
                    <div className="me-2 d-flex align-items-baseline">
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
                    className="form-control"
                    value={userData["CGI"]}
                    onChange={(e) =>
                      setUserData({ ...userData, CGI: e.target.value })
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
                      setUserData({
                        ...userData,
                        ContactInfo: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="row " style={{ marginTop: "1.5rem" }}>
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="p_color" style={{ width: "fit-content" ,marginBottom:"0"}}>
                      Accommodations are currently available near me
                    </p>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      checked={nearbyAccommodation}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row" style={{marginTop:"1.9rem"}}>
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="p_color" style={{marginBottom:"0"}}>I am looking for a roommate</p>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      checked={roommate}
                      onChange={() => {
                        setRoommate(!roommate);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row" style={{marginTop:"1.9rem"}}>
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="p_color" style={{marginBottom:"0"}}>I am looking for a flatmate</p>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      checked={flatmate}
                      onChange={() => {
                        setFlatmate(!flatmate);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row " style={{marginTop:"1.625rem"}}>
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

              <div className="row d-flex justify-content-end" style={{marginTop:"3.5rem"}}>
                <div className="col-6" style={{padding:"0"}}>
                  <button
                    onClick={() => {
                      next();
                      console.log(userData);
                    }}
                    className="border-0 save-btn"
                    style={{ width: "100%" }}
                  >
                    <p style={{margin:" 0.25rem 4.1rem"}}>Save & Next</p>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Body>
      </FormContainer>
    </>
  );
};

export default Step1;
