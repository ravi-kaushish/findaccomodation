import React ,{useContext,useState}from "react";
import VerticalStepper from "../verticalStepper/verticalStepper";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import { MultiStepContext } from "../stepContext/stepContext";
import Navbar from "../navbar/navbar";
import styled from "styled-components";
import ReqStep1 from "./reqStep1/reqStep1";
import ReqStep2 from "./reqStep2/reqStep2";
import ReqStep3 from "./reqStep3/reqStep3";
import "./requirementMultiStepForm.css"
import HorizontalStepper from "../horizontalStepper/horizontalStepper";

const RequirementMultiStepForm = () => {
  const [call, setCall] = React.useState("isRequirement");

  const PageContainer = styled.div`
    @media (min-width: 1240px) {
      width: 1240px;
    }
  `;
  

const { reqCurrentIndex } = useContext(MultiStepContext);
console.log(reqCurrentIndex);
function currentStep(step) {
  switch (step) {
    case 1:
      return <ReqStep1 />;
    case 2:
      return <ReqStep2 />;
    case 3:
      return <ReqStep3 />;
 
  }
}

  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <PageContainer
            className="container-fluid"
            style={{ padding: "0", height: "100vh" }}
          >
            <div className="row" style={{ width: "100%", height: "100vh" }}>
              <div className="col-5 d-sm-flex d-none">
                <VerticalStepper call={call} />
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
                <HorizontalStepper call="requirement" />
                {currentStep(reqCurrentIndex)}
              </div>
            </div>
          </PageContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default RequirementMultiStepForm;
