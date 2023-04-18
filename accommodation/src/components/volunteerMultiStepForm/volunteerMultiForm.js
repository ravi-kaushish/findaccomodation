import React, { useContext, useState } from "react";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import VerticalStepper from "../verticalStepper/verticalStepper";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";
import Step4 from "./step4/step4";
import Step5 from "./step5/step5";
import Navbar from "../navbar/navbar";
import VolunteerStepInfo from "./volunteerStepInfo/volunteerStepInfo";
import { MultiStepContext } from "../stepContext/stepContext";

const VolunteerMultiForm = () => {
  const { currentIndex } = useContext(MultiStepContext);
  function currentStep(step) {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
    }
  }

  return (
    <>
      <Navbar />

      <Wrapper>
        <Container>
          <div className="container-fluid" style={{height:"100vh"}}>
            <div className="row" style={{height:"100vh"}}>
              <div className="col-5" >
                <VerticalStepper />
              </div>
              <div
                className="col-7"
                style={{ paddingLeft: "3.5rem", paddingTop: "2rem",paddingRight:"10rem",paddingBottom:"6rem" }}
              >
                {currentStep(currentIndex)}{" "}
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default VolunteerMultiForm;
