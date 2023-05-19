import React, { useContext , useState } from "react";
import { FormContainer, Header, Body } from "../../utilityStyles/utilityStyles";
import styled from "styled-components";
import { MultiStepContext } from "../../stepContext/stepContext";
import "./reqStep1.css";

const ReqStep1 = () => {

  const [locality, setLocality] = useState("");
  const [isLocalityValid, setIsLocalityValid] = useState(false);

  const [contact, setContact] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  const [date, setDate] = useState("");
  const [issetDateValid, setIsDateValid] = useState(false);

  const handlePhoneNumberChange = (event) => {
    const phoneNumber = event.target.value;
    if (phoneNumber.trim().length <= 10) {
      setContact(phoneNumber.trim());
    }
    setIsPhoneNumberValid(
      phoneNumber.length === 0 || phoneNumber.trim().length < 10 ? false : true
    );
  };


  const handleDateChange = (event) => {
    const phoneNumber = event.target.value;
    if (phoneNumber.trim().length <= 10) {
      setContact(phoneNumber.trim());
    }
    setIsPhoneNumberValid(
      phoneNumber.length === 0 || phoneNumber.trim().length < 10 ? false : true
    );
  };



  const { reqCurrentIndex, reqNext , requirementData,setRequirementData } = useContext(MultiStepContext);
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
            fontSize: "1rem",
            lineHeight: "1.25rem",

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
            <input id="locality" className="form-control" type="text" placeholder="Locality"
            value={requirementData["locality"]} onChange={(e)=>setRequirementData({...requirementData, locality : e.target.value})}/>
          </div>
          <div className="form-group" style={{ marginTop: "2rem" }}>
            <label
              for="contactInfo"
              style={{ marginBottom: "0.375rem" }}
              className="reqStep1__label-h"
            >
              Contact No.
            </label>
            <input id="contactInfo" className="form-control" type="tel" placeholder="Contact No."
              value={contact} onChange={(e)=>{handlePhoneNumberChange(e)}}
            />
            {!isPhoneNumberValid && contact && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Phone no. cannot be empty
                </span>
              )}
          </div>
          <div className="form-group" style={{ marginTop: "2rem" }}>
            <label
              for="relocationDate"
              style={{ marginBottom: "0.375rem" }}
              className="reqStep1__label-h"
            >
              Preferred Relocation Date
            </label>
            <input id="relocationDate" className="form-control" type="date" 
              value={date} onChange={handleDateChange}
            />
          </div>
          <div className="row justify-content-end"  style={{marginTop: "17.75rem"}}>
            <div className="col-6">
            <button style={{width:"100%"}} className="reqStep1__btn" type="button" onClick={(e)=>{reqNext(e);
            console.log(requirementData)}}>
              <p className="reqStep__btn-p" style={{ margin: "5% 0" }}> Save & Next</p>
            </button>

            </div>
          </div>
          
        </form>
      </Body>
    </FormContainer>
  );
};

export default ReqStep1;
