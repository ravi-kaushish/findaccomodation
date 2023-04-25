import React, { useContext, useState } from "react";
import "./volunteerMultiForm.css"
import {
  Wrapper,
  Container,
  PageContainer,
} from "../utilityStyles/utilityStyles";
import VerticalStepper from "../verticalStepper/verticalStepper";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";
import Step4 from "./step4/step4";
import Step5 from "./step5/step5";
import Navbar from "../navbar/navbar";
import VolunteerStepInfo from "./volunteerStepInfo/volunteerStepInfo";
import { MultiStepContext } from "../stepContext/stepContext";
import HorizontalStepper from "../horizontalStepper/horizontalStepper";

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
          <PageContainer
            className="container-fluid page-container"
            style={{ padding: "0", height: "100vh" }}
          >
            <div className="row" style={{ width: "100%", height: "100vh" }}>
              <div className="col-5  d-sm-flex d-none ">
                <VerticalStepper />
              </div>
              <div
                className="col-12 col-sm-7 form"
                style={{
                  paddingTop: "2rem",
                  paddingLeft: "2.75rem",
                  paddingRight: "15%",
                  paddingBottom: "6rem",
                }}
              >
                <HorizontalStepper />
                {currentStep(currentIndex)}
              </div>
            </div>
          </PageContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default VolunteerMultiForm;
