import React, { useContext, useState } from "react";
import alert from "../../../images/alert.svg";
import { FormContainer, Header, Body } from "../../utilityStyles/utilityStyles";
import "./step2.css";
import { MultiStepContext } from "../../stepContext/stepContext";
import detectLocation from "../../../images/detectLocation.svg";
import styled from "styled-components";

const Step2 = () => {
  const { next, previous, userData, setUserData } =
    useContext(MultiStepContext);

 

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
              fontSize: "16px",
              lineHeight: "19px",

              color: "#626262",
            }}
          >
            Step 2
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
            Location
          </p>
          <hr style={{ margin: "0" }} />
        </Header>
        <Body>
          <div style={{ padding: "0 0.75rem", marginTop: "1.5rem" }}>
            <div className="contianer d-flex flex-column ">
              <div className="row" style={{ margin: "0" }}>
                <div
                  className="col-12 d-flex"
                  style={{
                    backgroundColor: "#E3F3FC",
                    borderRadius: "4px",
                    margin: "0",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    src={alert}
                    alt=""
                    style={{ padding: "1.125rem 0.74rem 0 0" }}
                  />
                  <p
                    className=".Step2__blue-para-style"
                    style={{ margin: "0.75rem 0", color: "black" }}
                  >
                    Your address will not be displayed to others. It will be
                    used to calculate approximate distance between office and
                    your residence
                  </p>
                </div>
              </div>
              <div
                className="row"
                style={{
                  marginTop: "2rem",
                  marginLeft: "0.08rem",
                  marginRight: "0.08rem",
                }}
              >
                <div className="col d-flex border " style={{ padding: "0" }}>
                  <img
                    className="icon"
                    style={{ margin: " 0 1rem" }}
                    src={detectLocation}
                  ></img>
                  <input
                    type="text"
                    placeholder="Detect my current location"
                    className="form-control"
                    style={{
                      border: "none",
                      paddingRight: "0",
                      paddingLeft: "0",
                    }}
                  />
                </div>
              </div>

              <form>
                <div className="row" style={{ marginTop: "1.5rem" }}>
                  <div className="col">
                    <p
                      className="Step2__add-info-style "
                      style={{ marginBottom: "0" }}
                    >
                      Enter additional information
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: "1.5rem" }}>
                  <p
                    className=".Step2__label-style"
                    style={{ marginBottom: "0.375rem", color: "#343435" }}
                  >
                    Locality
                  </p>
                  <input
                    type="text"
                    placeholder="Enter you locality"
                    className="form-control"
                    value={userData["locality"] }
                    onChange={(e) => {
                      setUserData({...userData, locality:e.target.value});
                    }}
                  />
                </div>

                <div style={{ marginTop: "1.5rem" }}>
                  <p
                    className=".Step2__label-style"
                    style={{ marginBottom: "0.375rem", color: "#343435" }}
                  >
                    Nearest Metro Station
                  </p>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    value={userData["nearestMetroStation"] == undefined ? "":userData["nearestMetroStation"]}
                    onChange={(e) => {
                      setUserData({...userData,nearestMetroStation:e.target.value});
                    }}
                  />
                </div>

                <div
                  className="row"
                  style={{
                    padding: "0",
                    marginTop: "1.5rem",
                    margin: "1.5rem 0 0",
                  }}
                >
                  <div
                    className="col-12 d-flex"
                    style={{
                      backgroundColor: "#E3F3FC",
                      borderRadius: "4px",
                      margin: "0",
                    }}
                  >
                    <img src={alert} alt="" className="img2" />
                    <p
                      className=".Step2__blue-para-style"
                      style={{ color: "black" , marginTop:"0.5rem" }}
                    >
                      This information will be displayed to others. Please don’t
                      add your residence address here.
                    </p>
                  </div>
                </div>
              </form>
            </div>

            
              <div className="row" style={{marginTop:"6.5rem"}}>
                <div className="col-6">
                  <button
                  className="prev-btn"
                    type="button"
                    class="prev-btn"
                    onClick={previous}
                    style={{width:"100%"}}
                  >
                    <p style={{margin:"5% 0"}}>Previous</p>
                  </button>
                </div>
              
               <div className="col-6">
                <button
                  onClick={() => {
           
                    next();
             
                  }}
                  style={{width:"100%"}}
                  className="border-0 save-btn "
                >
                  <p style={{margin:"5% 0"}}>Save & Next</p>
                </button>
              </div>
              </div>
            </div>
          
        </Body>
      </FormContainer>
    </>
  );
};

export default Step2;
