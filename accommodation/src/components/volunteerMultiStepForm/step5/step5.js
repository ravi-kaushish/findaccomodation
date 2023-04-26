import React, { useContext, useState } from "react";
import "./step5.css";
import alert from "../../../images/alert.svg";
import { MultiStepContext } from "../../stepContext/stepContext";
import styled from "styled-components";
import { FormContainer, Header, Body } from "../../utilityStyles/utilityStyles";

const MainContainer = styled.div``;

const Step5 = () => {
  const { previous, submitForm } = useContext(MultiStepContext);
  const { activeBtn, setActiveBtn } = useState(true);
  function btnHandler() {
    setActiveBtn(!activeBtn);
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
              fontSize: "16px",
              lineHeight: "19px",

              color: "#626262",
            }}
          >
            Step 5
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
            Contact Information
          </p>
          <hr style={{ margin: "0" }} />
        </Header>
        <Body>
        <div className="container-fluid" style={{padding: "0 0.75rem"}}>
          <form>
            <div className="row ">
              <div className="col ">
                <p
                  className="Step5__form-heading"
                  style={{ marginBottom: "0" }}
                >
                  Preferred days and time to contact you
                </p>
              </div>
              <div className="" style={{ marginTop: "1rem" }}>
                <div className="d-flex justify-content-between">
                  <button
                    className={
                      activeBtn ? "Step5__btn-style" : "Step5__btn-active"
                    }
                    onClick={btnHandler}
                  >
                    <p
                      className={
                        activeBtn ? "Step5__btn-p" : "Step5__btn-p-active"
                      }
                      style={{ margin: "0.75rem 2.2rem" }}
                    >
                      Mon-Fri
                    </p>
                  </button>
                  <button className="Step5__btn-style ">
                    <p
                      className="Step5__btn-p"
                      style={{ margin: "0.75rem 2.2rem" }}
                    >
                      Weekends
                    </p>
                  </button>
                  <button className="Step5__btn-style">
                    <p
                      className="Step5__btn-p"
                      style={{ margin: "0.75rem 2.2rem" }}
                    >
                      All Days
                    </p>
                  </button>
                </div>

                <div className="d-flex gap-4" style={{ marginTop: "1rem" }}>
                  <input
                    type="time"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="From"
                  />
                  <input
                    type="time"
                    name=""
                    id=""
                    className="form-control "
                    placeholder="To"
                  />
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: "2rem" }}>
              <div className="d-flex gap-2">
                <div className="">
                  <p
                    className=" Step5__form-heading"
                    style={{ color: "#343435" }}
                  >
                    Landlord/House owner details
                  </p>
                </div>
                <div className=" ">
                  <p className="Step5__form-italic">(Optional)</p>
                </div>
              </div>

              <div
                className="row "
                style={{
                  marginTop: "1rem",
                  marginLeft: "0rem",
                  marginRight: "2rem",
                }}
              >
                <div
                  className="col d-flex "
                  style={{
                    backgroundColor: "#E3F3FC",
                    borderRadius: "4px",
                    padding: "0.5rem 0.75rem",
                  }}
                >
                  <img src={alert} alt="" className="" style={{marginRight:"4px"}}/>
                  <p className="" style={{ marginBottom: "0"}}>
                    Please provide this information after your landlord's
                    consent.
                  </p>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: "1.5rem" }}>
              <div className="col">
                <p className="Step5__form-heading">
                  Name of your Landlord/House owner
                </p>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row" style={{ marginTop: "1.5rem" }}>
              <div className="col">
                <p className="p_input ">Contact Number</p>
                <input
                  type="text"
                  placeholder="0987654321"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row" style={{ marginTop: "9.2rem" }}>
              <div className="col-6">
                <button
                  className="prev-btn"
                  type="button"
                  class="prev-btn"
                  onClick={previous}
                  style={{ width: "100%" }}
                >
                  <p style={{ margin: "5% 0" }}>Previous</p>
                </button>
              </div>

              <div className="col-6">
                <button
                  onClick={() => {
                    submitForm();
                    //   setData();
                  }}
                  style={{ width: "100%" }}
                  className="border-0 save-btn "
                >
                  <p style={{ margin: "5% 0" }}>Submit</p>
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

export default Step5;
