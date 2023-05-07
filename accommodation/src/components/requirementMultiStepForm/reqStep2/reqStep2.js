import React, { useContext, useState } from "react";
import { FormContainer, Header, Body } from "../../utilityStyles/utilityStyles";
import "./reqStep2.css";
import { MultiStepContext } from "../../stepContext/stepContext";
const ReqStep2 = () => {
  const { reqNext, reqPrevious, requirementData, setRequirementData } =
    useContext(MultiStepContext);
  const [accType, setAccType] = useState(requirementData["accTypeId"]);
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
              lineHeight: "1.25rem",

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
              fontSize: "1.25rem",
              lineHeight: "1.5rem",
            }}
          >
            Accommodation Types
          </p>
          <hr style={{ margin: "0" }} />
        </Header>
        <Body>
          {console.log(requirementData["accTypeId"])}
          <p className="reqStep2__label-h" style={{ marginBottom: "1rem" }}>
            Accommodation Type
          </p>
          <div
            className="container-fluid d-flex flex-row gap-4"
            style={{ padding: "0", marginBottom: "1.5rem" }}
          >
            <button
              type="button"
              className={
                requirementData["accTypeId"] == 1
                  ? "reqStep2__btn-active"
                  : "reqStep2__btn"
              }
              onClick={(event) => {
                event.preventDefault();
                setRequirementData({ ...requirementData, accTypeId: 1 });
              }}
            >
              <p
                className="reqStep2__btn-p"
                style={{ margin: "0.75rem 3.09rem" }}
              >
                PG
              </p>
            </button>
            <button
              type="button"
              className={
                requirementData["accTypeId"] == 2
                  ? "reqStep2__btn-active"
                  : "reqStep2__btn"
              }
              onClick={(event) => {
                event.preventDefault();
                setRequirementData({ ...requirementData, accTypeId: 2 });
              }}
            >
              <p
                className="reqStep2__btn-p"
                style={{ margin: "0.75rem 2.93rem" }}
              >
                Flat
              </p>
            </button>
          </div>
          {requirementData["accTypeId"] == 1 ? (
            <div>
              <p className="reqStep2__label-h" style={{ marginBottom: "1rem" }}>
                Sharing Type
              </p>
              <div
                className="container-fluid d-flex flex-row gap-4"
                style={{ padding: "0", marginBottom: "1.5rem" }}
              >
                <button type="button" className="reqStep2__btn">
                  <p
                    className="reqStep2__btn-p"
                    style={{ margin: "0.75rem 2.53rem" }}
                  >
                    Single
                  </p>
                </button>
                <button type="button" className="reqStep2__btn">
                  <p
                    className="reqStep2__btn-p"
                    style={{ margin: "0.75rem 2.53rem" }}
                  >
                    Double
                  </p>
                </button>

                <button type="button" className="reqStep2__btn">
                  <p
                    className="reqStep2__btn-p"
                    style={{ margin: "0.75rem 2.53rem" }}
                  >
                    Triple
                  </p>
                </button>
              </div>
            </div>
          ) : (
          <div className="container-fluid" style={{ padding: "0" }}>
            <div className="row" style={{ marginBottom: "1.5rem" }}>
              <div className="col-12 " onClick={()=>{setRequirementData({...requirementData})}}>
                <p
                  className="reqStep2__label-h"
                  style={{ marginBottom: "1rem" }}
                >
                  {" "}
                  BHK TYPE
                </p>
              </div>

              <div className="  col-sm-2 col-md-4 reqStep2__div">
                <p>1 RK</p>
              </div>
              <div className="  col-sm-2 col-md-4  reqStep2__div">
                <p>1 BHK</p>
              </div>
              <div className="  col-sm-2 col-md-4 reqStep2__div">
                <p>2 BHK</p>
              </div>
              <div className="  col-sm-2 col-md-4 reqStep2__div">
                <p>3 BHK</p>
              </div>
              <div className=" col-sm-42 col-md-4 reqStep2__div">
                <p>4 BHK</p>
              </div>
            </div>
            <div className="row" style={{ marginBottom: "1.5rem" }}>
              <div className="col-12 ">
                <p
                  className="reqStep2__label-h"
                  style={{ marginBottom: "1rem" }}
                >
                  {" "}
                  Furnishing Type
                </p>
              </div>

              <div className="  col-sm-2 col-md-4 reqStep2__div">
                <p>Fully Furnished</p>
              </div>
              <div className="  col-sm-2 col-md-4  reqStep2__div">
                <p>Semi Furnished</p>
              </div>
              <div className="  col-sm-2 col-md-4 reqStep2__div">
                <p>Unfurnished</p>
              </div>
            </div>
          </div> )}

          <p className="reqStep2__label-h" style={{ marginBottom: "1.15rem" }}>
            House Habit Preferences
          </p>
          <div class="form-check" style={{ marginBottom: "1.18rem" }}>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked={requirementData["isNonVeg"]}
              onChange={(event) => {
                setRequirementData({
                  ...requirementData,
                  isNonVeg: event.target.checked,
                });
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Non Veg
            </label>
          </div>
          <div class="form-check" style={{ marginBottom: "1.18rem" }}>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked={requirementData["isSmoking"]}
              onChange={(event) => {
                setRequirementData({
                  ...requirementData,
                  isSmoking: event.target.checked,
                });
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Smoking
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked={requirementData["isDrinking"]}
              onChange={(event) => {
                setRequirementData({
                  ...requirementData,
                  isDrinking: event.target.checked,
                });
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Drinking
            </label>
          </div>
          <div className="row " style={{ marginTop: "14.5rem", padding: "0" }}>
            <div className="col-6">
              <button
                className="reqStep2__btn-pre"
                type="button"
                onClick={reqPrevious}
                style={{ width: "100%" }}
              >
                <p className="reqStep__btn-p " style={{ margin: "5% 0" }}>
                  Previous
                </p>
              </button>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="reqStep2__btn-next"
                onClick={reqNext}
                style={{ width: "100%" }}
              >
                <p className="reqStep__btn-p " style={{ margin: "5% 0" }}>
                  Save & Next
                </p>
              </button>
            </div>
          </div>
        </Body>
      </FormContainer>
    </>
  );
};

export default ReqStep2;
