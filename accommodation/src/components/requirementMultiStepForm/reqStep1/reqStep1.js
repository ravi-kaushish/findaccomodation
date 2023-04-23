import React, { useContext } from "react";
import { FormContainer, Header, Body } from "../../utilityStyles/utilityStyles";
import styled from "styled-components";
import { MultiStepContext } from "../../stepContext/stepContext";
import "./reqStep1.css";

const ReqStep1 = () => {
  const { reqCurrentIndex, reqNext } = useContext(MultiStepContext);
  console.log(reqCurrentIndex);

  return (
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
          Basic Information
        </p>
        <hr style={{ margin: "0" }} />
      </Header>
      <Body>
        <p className="reqStep1__form-heading" style={{ marginBottom: "0" }}>
          Add your preferred location
        </p>
        <form style={{ marginTop: "1.5rem" }}>
          <div className="form-group">
            <label
              for="locality"
              style={{ marginBottom: "0.375rem" }}
              className="reqStep1__label-h"
            >
              Locality
            </label>
            <input id="locality" className="form-control" type="text" />
          </div>
          <div className="form-group" style={{ marginTop: "2rem" }}>
            <label
              for="contactInfo"
              style={{ marginBottom: "0.375rem" }}
              className="reqStep1__label-h"
            >
              Contact No
            </label>
            <input id="contactInfo" className="form-control" type="tel" />
          </div>
          <div className="form-group" style={{ marginTop: "2rem" }}>
            <label
              for="relocationDate"
              style={{ marginBottom: "0.375rem" }}
              className="reqStep1__label-h"
            >
              Preferred Relocation Date
            </label>
            <input id="relocationDate" className="form-control" type="date" />
          </div>
          <div
            className="container-fluid d-flex justify-content-end"
            style={{ marginTop: "17.75rem", padding: "0" }}
          >
            <button className="reqStep1__btn" type="button" onClick={()=>{reqNext();}}>
              <p style={{ margin: "0.25rem 3.46rem" }}> Save & Next</p>
            </button>
          </div>
        </form>
      </Body>
    </FormContainer>
  );
};

export default ReqStep1;
