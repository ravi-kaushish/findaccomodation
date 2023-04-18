import React, { useContext,useState } from "react";
import "./step5.css";
import alert from "../../../images/alert.svg";
import { MultiStepContext } from "../../stepContext/stepContext";
import styled from "styled-components";


const MainContainer = styled.div``;

const Step5 = () => {
  const { previous, submitForm } = useContext(MultiStepContext);
  const {activeBtn , setActiveBtn }  = useState(true)
  function btnHandler (){
    setActiveBtn(!activeBtn)
  }
  return (
    <>
      {/* <div className="container-fluid d-flex align-content-center justify-content-center p-4">
      <div className="hello">
        <div className="row ">
          <div className="mb-1">
            <p
              className="my-0 mhead"
              style={{
                color: "#626262",
                font: "Lato",
                fontSize: "16px",
                padding: "0px",
              }}
            >
              Step 5
            </p>
          </div>
          <div>
            <p className="mt-1 mb-2 p_color my-0 heading">
              Contact Information
            </p>
          </div>
        </div>

        <hr />

        <form>
          <div className="row mb-4">
            <div className="col mb-3">
              <p className="my-0 subhead">
                Preferred days and time to contact you
              </p>
            </div>
            <div className="">
              <div className="d-flex">
                <button className="pgbutn">
                  <p className="ms-1 my-1">Mon-Fri</p>
                </button>
                <button className="d-flex flatbtn mx-3">
                  <p className="my-0">Weekends</p>
                </button>
                <button className="d-flex flatbtn">
                  <p className="my-0">All Days</p>
                </button>
              </div>

              <div className="d-flex mt-3">
                <input type="time" name="" id="" className="form-control" placeholder=""/>
                <input type="time" name="" id="" className="form-control mx-4"/>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="d-flex">
              <div className="mb-3">
                <p className="my-0 subhead">Landlord/House owner details</p>
              </div>
              <div className=" mx-2 mb-3">
                <p className="my-0 subheado">(Optional)</p>
              </div>
            </div>

            <div className="row mb-4  mt-1">
              <div
                className="col-12 d-flex"
                style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" }}
              >
                <img src={alert} alt="" className="img2" />
                <p className="mb-2 mt-2 p_color">
                  Please provide this information after your landlord’s consent.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p className="p_input">Name of your Landlord/House owner</p>
              <input
                type="text"
                placeholder="John Doe"
                className="form-control"
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p className="p_input mt-4" >Contact Number</p>
              <input
                type="text"
                placeholder="0987654321"
                className="form-control"
              />
            </div>
          </div>

          <div className="row">
            <div
              className="d-flex justify-content-end"
              style={{ marginTop: "150px" }}
            >
              <button className="d-flex imgButn mx-4" onClick={previous}>
                <div className="ms-1 my-1">
                  <p>Previous</p>
                </div>
              </button>
              <button className="border-0 butn" onClick={submitForm}>Save & Next</button>
            </div>
          </div>
        </form>
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
        </div>
        <div style={{ marginTop: "1.25rem" , padding:"0 1.125rem"}}>
          <form>
            <div className="row ">
              <div className="col ">
                <p className="Step5__form-heading">
                  Preferred days and time to contact you
                </p>
              </div>
              <div className="" style={{marginTop:"1rem"}}>
                <div className="d-flex justify-content-evenly">
                  <button className= {activeBtn ? "Step5__btn-style": "Step5__btn-active"} onClick={btnHandler}>
                    <p className={activeBtn ? "Step5__btn-p" : "Step5__btn-p-active" }  style={{margin:"0.75rem 1.9rem"}}>Mon-Fri</p>
                  </button>
                  <button className="Step5__btn-style">
                    <p className="Step5__btn-p" style={{margin:"0.75rem 1.9rem"}}>Weekends</p>
                  </button>
                  <button className="Step5__btn-style">
                    <p className="Step5__btn-p" style={{margin:"0.75rem 1.9rem"}}>All Days</p>
                  </button>
                </div>

                <div className="d-flex " style={{marginTop:"1rem"}}>
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

            <div className="row" style={{marginTop:"2rem"}}>
              <div className="d-flex gap-2">
                <div className="">
                  <p className=" Step5__form-heading" style={{color: "#343435"}}>Landlord/House owner details</p>
                </div>
                <div className=" ">
                  <p className="Step5__form-italic">(Optional)</p>
                </div>
              </div>

              <div className="row " style={{marginTop:"1rem"}}>
                <div
                  className="col-12 d-flex justify-content-center align-items-baseline"
                  style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" ,padding:"0.5rem 0.75rem"}}
                >
                  <img src={alert} alt="" className="" />
                  <p className="" style={{marginBottom:"0"}}>
                    Please provide this information after your landlord’s
                    consent.
                  </p>
                </div>
              </div>
            </div>

            <div className="row" style={{marginTop:"1.5rem"}}>
              <div className="col">
                <p className="p_input">Name of your Landlord/House owner</p>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row" style={{marginTop:"1.5rem"}}>
              <div className="col">
                <p className="p_input ">Contact Number</p>
                <input
                  type="text"
                  placeholder="0987654321"
                  className="form-control"
                />
              </div>
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
                  submitForm();
                  //   setData();
                }}
                className="border-0 butn "
                style={{ width: "40%" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </MainContainer>
    </>
  );
};

export default Step5;
