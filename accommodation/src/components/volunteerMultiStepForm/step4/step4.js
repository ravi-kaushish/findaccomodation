import React, { useContext } from "react";
import { MultiStepContext } from "../../stepContext/stepContext";
import styled from "styled-components";
import "./step4.css";

const MainContainer = styled.div``;

const Step4 = () => {
  const { next, previous } = useContext(MultiStepContext);
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
                Step 4
              </p>
            </div>
            <div>
              <p className="mt-1 mb-2 p_color my-0 heading">Amenities</p>
            </div>
          </div>

          <hr />

          <form>
            <div className="row">
              <div className="mt-4">
                <p className="my-0 subhead">
                  I have access to the following facilities:
                </p>
              </div>

              <fieldset>
                <div className="mt-3">
                  <input
                    type="checkbox"
                    id="coding"
                    name="interest"
                    value="coding"
                    className=""
                  />
                  <label className="mx-3">Wi-Fi</label>
                </div>
                <div className="mt-3">
                  <input
                    type="checkbox"
                    id="music"
                    name="interest"
                    value="music"
                  />
                  <label className="mx-3">Food</label>
                </div>
                <div className="mt-3">
                  <input
                    type="checkbox"
                    id="music"
                    name="interest"
                    value="music"
                  />
                  <label className="mx-3">Induction</label>
                </div>
                <div className="mt-3">
                  <input
                    type="checkbox"
                    id="music"
                    name="interest"
                    value="music"
                  />
                  <label className="mx-3">AC</label>
                </div>
                <div className="mt-3">
                  <input
                    type="checkbox"
                    id="music"
                    name="interest"
                    value="music"
                  />
                  <label className="mx-3">Geyser</label>
                </div>
                <div className="mt-3">
                  <input
                    type="checkbox"
                    id="music"
                    name="interest"
                    value="music"
                  />
                  <label className="mx-3">Cleanliness</label>
                </div>
                <div className="mt-3">
                  <input
                    type="checkbox"
                    id="music"
                    name="interest"
                    value="music"
                  />
                  <label className="mx-3">Washing Machine</label>
                </div>
                <div className="mt-3">
                  <input
                    type="checkbox"
                    id="music"
                    name="interest"
                    value="music"
                  />
                  <label className="mx-3">Parking (2-wheeler)</label>
                </div>
                <div className="mt-3">
                  <input
                    type="checkbox"
                    id="music"
                    name="interest"
                    value="music"
                  />
                  <label className="mx-3">Parking (4-wheeler)</label>
                </div>
              </fieldset>
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
                <button className="border-0 butn" onClick={next}>
                  Save & Next
                </button>
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
            Step 4
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
            Amenities
          </p>
          <hr style={{ margin: "0" }} />
        </div>
        <div style={{ marginTop: "1.5rem", padding:"0 1.125rem" }}>
          <form>
            <div className="row">
              <div className="col">
                <p className="Step4__form-heading" style={{margin:"0"}}>
                  I have access to the following facilities:
                </p>
              </div>

              <fieldset>
                <div className="" style={{marginTop:"1.25rem"}}>
                  <input
                    type="checkbox"
                    id="coding"
                    name="interest"
                    value="coding"
                    className=""
                  />
                  <label className="Step4__label-text" style={{marginLeft:"0.43rem"}}>Wi-Fi</label>
                </div>
                <div className="" style={{marginTop:"1.25rem"}}>
                  <input
                    type="checkbox"
                    id="music"
                    name="interest"
                    value="music"
                  />
                  <label className="Step4__label-text" style={{marginLeft:"0.43rem"}}>Food</label>
                </div>
                <div className="" style={{marginTop:"1.25rem"}}>
                  <input
                    type="checkbox"
                    id="music"
                    name="interest"
                    value="music"
                  />
                  <label className="Step4__label-text" style={{marginLeft:"0.43rem"}}>Induction</label>
                </div>
                <div className="" style={{marginTop:"1.25rem"}}>
                  <input
                    type="checkbox"
                    id="music"
                    name="interest"
                    value="music"
                  />
                  <label className="Step4__label-text" style={{marginLeft:"0.43rem"}} >AC</label>
                </div>
                <div className="" style={{marginTop:"1.25rem"}}>
                  <input
                    type="checkbox"
                    id="music"
                    name="interest"
                    value="music"
                  />
                  <label className="Step4__label-text" style={{marginLeft:"0.43rem"}}>Geyser</label>
                </div>
                <div className="" style={{marginTop:"1.25rem"}}>
                  <input
                    type="checkbox"
                    id="music"
                    name="interest"
                    value="music"
                  />
                  <label className="Step4__label-text" style={{marginLeft:"0.43rem"}}>Cleanliness</label>
                </div>
                <div className="" style={{marginTop:"1.25rem"}}>
                  <input
                    type="checkbox"
                    id="music"
                    name="interest"
                    value="music"
                  />
                  <label className="Step4__label-text" style={{marginLeft:"0.43rem"}}>Washing Machine</label>
                </div>
                <div className="" style={{marginTop:"1.25rem"}}>
                  <input
                    type="checkbox"
                    id="music"
                    name="interest"
                    value="music"
                  />
                  <label className="Step4__label-text" style={{marginLeft:"0.43rem"}}>Parking (2-wheeler)</label>
                </div>
                <div className="" style={{marginTop:"1.25rem"}}>
                  <input
                    type="checkbox"
                    id="music"
                    name="interest"
                    value="music"
                  />
                  <label className="Step4__label-text" style={{marginLeft:"0.43rem"}}>Parking (4-wheeler)</label>
                </div>
              </fieldset>
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
          </form>
        </div>
      </MainContainer>
    </>
  );
};

export default Step4;
