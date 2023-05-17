import React, { useState, useContext, useEffect } from "react";
import "./step3.css";
import { MultiStepContext } from "../../stepContext/stepContext";
import styled from "styled-components";
import { FormContainer, Header, Body } from "../../utilityStyles/utilityStyles";


const MainContainer = styled.div``;

const Step3 = () => {
  const { next, previous, userData, setUserData, currentIndex } =
    useContext(MultiStepContext);

  const [accommodationType,setAccommodationType] = useState(true);
  const [singlePg,setSinglePg] = useState(false)
  const [doublePg,setDoublePg] = useState(false)
  const [triplePg,setTriplePg] = useState(false)
  


  function handlePgAccommodation(event){
    event.preventDefault();

    setAccommodationType(true)
    
  }
  function handleFlatAccommodation(event){
    event.preventDefault();
    setAccommodationType(false)
    
    
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
              lineHeight: "1.18rem",

              color: "#626262",
            }}
          >
            Step 3
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
            Accommodation Type
          </p>
          <hr style={{ margin: "0" }} />
        </Header>
        <Body>
        <div className="container-fluid" style={{padding: "0 0.75rem"}}>
          <form>
            <p className="Step3__form-heading" style={{ marginBotton: "1rem" }}>
              Accommodation Type
            </p>
            <div
              className="contianer d-flex flex-row gap-3"
              style={{ marginBottom: "1.5rem" }}
            >
              <button className= {accommodationType ? "step3__active-btn":"Step3__btn-style"}  onClick={(e)=>handlePgAccommodation(e)} type="button">
                <p className="Step3__btn-p-style">PG</p>
              </button>
              <button className={!accommodationType ? "step3__active-btn":"Step3__btn-style"} type="button" onClick={(e)=>handleFlatAccommodation(e)} >
                <p className="Step3__btn-p-style" >Flat</p>
              </button>
            </div>
           
                <>  
              
                <p className="Step3__form-heading" style={{ marginBottom: "1rem" }}>
              Sharing Type
                </p>
                <div
              className="contianer d-flex flex-row gap-3"
              style={{ marginBottom: "1.5rem" }}
            >
              <button type="button"  
                className= {userData["sharingId"] === 1 ? "step3__active-btn" :"Step3__btn-style "}  
                onClick={()=>{setUserData({...userData,sharingId:1}) }}
              >
                <p className="" style={{margin:"0.5rem 3rem"}}>Single</p>
              </button>
              <button type="button"
                className="Step3__btn-style" 
                onClick={()=>{setUserData({...userData,sharingId:2})}}
              >
                <p className=" " style={{margin:"0.5rem 3rem"}}>Double</p>
              </button>
              <button type="button"
                className="Step3__btn-style"
                onClick={()=>{setUserData({...userData,sharingId:3})}}
              >
                <p className=" " style={{margin:"0.5rem 4rem"}}>Triple</p>
              </button>
             
              
                </div>
                </>
            
            


            <p
              className="Step3__form-heading"
              style={{ marginBottom: "1.15rem" }}
            >
              House Habit Permitted
            </p>
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
                checked={userData["isDrinking"] == undefined ? false : userData["isDrinking"]}
                onChange={()=>setUserData({...userData,isDrinking:true})}
              />
              <label class="form-check-label" for="flexCheckDefault">
                Drinking
              </label>
            </div>

            <div className="row" style={{ marginTop: "18rem" }}>
              <div className="col-6">
                <button
                  className="prev-btn"
                  type="button"
                  class="prev-btn"
                  onClick={()=>{  previous()}}
                  style={{ width: "100%" }}
                >
                  <p style={{ margin: "5% 0" }}>Previous</p>
                </button>
              </div>

              <div className="col-6">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    next();
                    
                  }}
                  style={{ width: "100%" }}
                  className="border-0 save-btn "
                >
                  <p style={{ margin: "5% 0" }}>Save & Next</p>
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

export default Step3;
