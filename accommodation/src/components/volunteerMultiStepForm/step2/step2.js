import React, { useContext } from "react";
import alert from "../../../images/alert.svg";
import "./step2.css";
import { MultiStepContext } from "../../stepContext/stepContext";
import detectLocation from "../../../images/detectLocation.svg";
import styled from "styled-components";

const MainContainer = styled.div``;

const Step2 = () => {
  const { next, previous } = useContext(MultiStepContext);

  return (
    <>
      {/* <div className="container-fluid " style={{ padding: "0" }}>
        <div className="row">
          <div>
            <p
              className=""
              style={{
                color: "#626262",
                font: "Lato",
                fontSize: "16px",
                padding: "0px",
                marginBottom: "0.25rem",
              }}
            >
              Step 2
            </p>

            <p
              className=""
              style={{
                marginTop: "0.5rem",
                color: "#343435",
                marginBottom: "0",
              }}
            >
              Location
            </p>
          </div>
        </div>

        <hr style={{ margin: "0.5rem 0 1.5rem" }} />
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
                  Your address will not be displayed to others. It will be used
                  to calculate approximate distance between office and your
                  residence
                </p>
              </div>
            </div>
            <div className="row" style={{ marginTop: "2rem" }}>
              <div className="col d-flex border" style={{ padding: "0" }}>
                <img className="icon" src={detectLocation}></img>
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
                <input type="text" placeholder="" className="form-control" />
              </div>

              <div style={{ marginTop: "1.5rem" }}>
                <p
                  className=".Step2__label-style"
                  style={{ marginBottom: "0.375rem", color: "#343435" }}
                >
                  Nearest Metro Station
                </p>
                <input type="text" placeholder="" className="form-control" />
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
                    style={{ color: "black" }}
                  >
                    This information will be displayed to others. Please don’t
                    add your residence address here.
                  </p>
                </div>
              </div>
            </form>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "7.5rem",
            }}
          >
            <button
              type="button"
              class="btn btn-outline-primary"
              onClick={previous}
            >
              Previous
            </button>
            <button
              onClick={() => {
                next();
                //   setData();
              }}
              className="border-0 butn "
              style={{ width: "40%" }}
            >
              Save & Next
            </button>
          </div>
        </div>
      </div> */}
      <MainContainer>
        <div>
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
        </div>
        <div style={{ marginTop: "1.5rem" }}>
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
              <div className="row" style={{ marginTop: "2rem" }}>
                <div className="col d-flex border" style={{ padding: "0" }}>
                  <img className="icon" src={detectLocation}></img>
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
                  <input type="text" placeholder="" className="form-control" />
                </div>

                <div style={{ marginTop: "1.5rem" }}>
                  <p
                    className=".Step2__label-style"
                    style={{ marginBottom: "0.375rem", color: "#343435" }}
                  >
                    Nearest Metro Station
                  </p>
                  <input type="text" placeholder="" className="form-control" />
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
                      style={{ color: "black" }}
                    >
                      This information will be displayed to others. Please don’t
                      add your residence address here.
                    </p>
                  </div>
                </div>
              </form>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "7.5rem",
              }}
            >
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={previous}
              >
                Previous
              </button>
              <button
                onClick={() => {
                  next();
                  //   setData();
                }}
                className="border-0 butn "
                style={{ width: "40%" }}
              >
                Save & Next
              </button>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Step2;
