import React, { useContext } from "react";
import { MultiStepContext } from "../../stepContext/stepContext";
import styled from "styled-components";
import "./step4.css";
import { FormContainer,Header,Body } from "../../utilityStyles/utilityStyles";

const MainContainer = styled.div``;

const Step4 = () => {
  const { next, previous } = useContext(MultiStepContext);
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
        </Header>
        <Body >
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
        </Body>
      </FormContainer>
    </>
  );
};

export default Step4;
