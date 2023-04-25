import React, { useState, useContext, useEffect } from "react";
import "./step3.css";
import { MultiStepContext } from "../../stepContext/stepContext";
import styled from "styled-components";
import { FormContainer, Header, Body } from "../../utilityStyles/utilityStyles";
import { func } from "prop-types";

const MainContainer = styled.div``;

const Step3 = () => {
  const { next, previous, userData, setUserData, currentIndex } =
    useContext(MultiStepContext);
  // // // useEffect(()=>{console.log("Step3 Mounted")},[])
  // // const { next, previous ,userData,setUserData} = useContext(MultiStepContext);
  // const [singlePg,setSinglePg] = useState(false)
  // // // useEffect(() => {setUserData({...userData,PG:{Single:singlePg}})}, [singlePg]);
  // const [doublePg,setDoublePg] = useState(false)
  // // // useEffect(() => {setUserData({...userData,PG:{Double:doublePg}})}, [doublePg]);
  // const [triplePg,setTriplePg] = useState(false)
  // // // useEffect(() => {setUserData({...userData,PG:{Triple:triplePg}})}, [triplePg]);

  // const [nonVeg, setNonVeg] = useState(false);
  // // // useEffect(() => {setUserData({...userData,NonVeg:nonVeg})}, [nonVeg]);
  // const [smoking, setSmoking] = useState(false);
  // // // useEffect(()=>{setUserData({...userData,Smoking:smoking})},[smoking]);
  // const [drinking, setDrinking] = useState(false);
  // // useEffect(()=>{setUserData({...userData,Drinking:drinking})},[drinking]);

  //  useEffect(()=>{console.log(userData)},[userData])
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
              <button className="Step3__btn-style" defaultChecked>
                <p className="Step3__btn-p-style">PG</p>
              </button>
              <button className="Step3__btn-style">
                <p className="Step3__btn-p-style">Flat</p>
              </button>
            </div>
            <p className="Step3__form-heading" style={{ marginBottom: "1rem" }}>
              Sharing Type
            </p>
            <div
              className="contianer d-flex flex-row gap-3"
              style={{ marginBottom: "1.5rem" }}
            >
              <button
                className="Step3__btn-style" /*onClick={()=>{setSinglePg(!singlePg)}}*/
              >
                <p className="Step3__btn-p-style">Single</p>
              </button>
              <button
                className="Step3__btn-style" /*onClick={()=>{setDoublePg(!doublePg)}}*/
              >
                <p className="Step3__btn-p-style">Double</p>
              </button>
              <button
                className="Step3__btn-style" /*onClick={()=>{setTriplePg(!triplePg)}}*/
              >
                <p className="Step3__btn-p-style">Triple</p>
              </button>
            </div>

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
                /*checked={/*Veg}
                /*onChange={()=>{setNonVeg(!nonVeg)}}
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
                /*checked={smoking}*/
                /*onChange={()=>{setSmoking(!smoking)}}*/
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
                /*checked={drinking}*/
                /*onChange={setDrinking(!drinking)}*/
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
                  onClick={previous}
                  style={{ width: "100%" }}
                >
                  <p style={{ margin: "5% 0" }}>Previous</p>
                </button>
              </div>

              <div className="col-6">
                <button
                  onClick={() => {
                    next();
                    //   setData();
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
