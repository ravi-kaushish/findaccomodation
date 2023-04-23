import React, { useContext } from "react";
import { FormContainer, Header, Body } from "../../utilityStyles/utilityStyles";
import "./reqStep2.css"
import { MultiStepContext } from "../../stepContext/stepContext";
const ReqStep2 = () => {
  const {reqNext,reqPrevious} = useContext(MultiStepContext)
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
            Accommodation Types
          </p>
          <hr style={{ margin: "0" }} />
        </Header>
        <Body>
          <p className="reqStep2__label-h" style={{marginBottom:"1rem"}}>Accommodation Type</p>
          <div
            className="container-fluid d-flex flex-row justify-content-between"
            style={{ padding: "0",marginBottom:"1.5rem" }}
          >
            <button type="button" className="reqStep2__btn">
              <p
                className="reqStep2__btn-p"
                style={{ margin: "0.75rem 3.09rem" }}
              >
                PG
              </p>
            </button>
            <button type="button" className="reqStep2__btn">
              <p
                className="reqStep2__btn-p"
                style={{ margin: "0.75rem 2.93rem" }}
              >
                Flat
              </p>
            </button>
          </div>
          <p className="reqStep2__label-h" style={{marginBottom:"1rem"}}>Sharing Type</p>
          <div
            className="container-fluid d-flex flex-row justify-content-between"
            style={{ padding: "0" ,marginBottom:"1.5rem"}}
          >
            <button type="button" className="reqStep2__btn">
              <p className="reqStep2__btn-p" style={{margin:"0.75rem 2.53rem"}}>Single</p>
            </button>
            <button type="button" className="reqStep2__btn">
              <p className="reqStep2__btn-p" style={{margin:"0.75rem 2.53rem"}}>Double</p>
            </button>

            <button type="button" className="reqStep2__btn">
              <p className="reqStep2__btn-p" style={{margin:"0.75rem 2.53rem"}}>Triple</p>
            </button>
          </div>
          <p className="reqStep2__label-h" style={{marginBottom:"1.15rem"}}>House Habit Preferences</p>
          <div class="form-check" style={{ marginBottom: "1.18rem" }}>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
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
            />
            <label class="form-check-label" for="flexCheckDefault">
              Smoking
            </label>
          </div>
          <div class="form-check" style={{ marginBottom: "12.37rem" }}>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Drinking
            </label>
          </div>
          <div className="container-fluid d-flex flex-row justify-content-between">
            <button className="reqStep2__btn-pre" type="button" onClick={reqPrevious}>
              <p className="reqStep2__btn-p " style={{margin:"0.50rem 3.46rem"}}>Previous</p>
            </button>

            <button type="button" className="reqStep2__btn-next" onClick={reqNext}>
              <p className="reqStep2__btn-p " style={{margin:"0.25rem 3.46rem"}}>Save & Next</p>
            </button>
          </div>
        </Body>
      </FormContainer>
    </>
  );
};

export default ReqStep2;
