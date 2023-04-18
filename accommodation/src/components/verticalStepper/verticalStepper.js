import React, { useContext } from "react";
import "./verticalStepper.css"
import {
  MainContainer,
  StepContainer,
  Title,
  Description,
} from "./verticalStepperStyle";
import VolunteerStepInfo from "../volunteerMultiStepForm/volunteerStepInfo/volunteerStepInfo";
import { MultiStepContext } from "../stepContext/stepContext";

function VerticalStepper() {
  const {currentIndex} = useContext(MultiStepContext);
  const stepsList = VolunteerStepInfo.map((currentStep) => (
    <StepContainer
      key={currentStep.step}
      className={currentStep.step == currentIndex ? "verticalStepper__active" : ""}
    >
      <div style={{ margin: "3% 4%" }}>
        <Title className="verticalStepper__heading">
          Step {currentStep.step}. {currentStep.title}
        </Title>
        <Description style={{ color: "black" }}>
          {currentStep.description}
        </Description>
      </div>
    </StepContainer>
  ));

  // const requirmentList = requirementInfo.map((currentStep) => (
  //   <StepContainer
  //     key={currentStep.step}
  //     className={currentStep.step == currentIndex + 1 ? "active" : ""}
  //   >
  //     <div style={{ margin: "3% 4%" }}>
  //       <Title>
  //         Step {currentStep.step}. {currentStep.title}
  //       </Title>
  //       <Description style={{ color: "black" }}>
  //         {currentStep.description}
  //       </Description>
  //     </div>
  //   </StepContainer>
  // ));
  return (
    <MainContainer style={{padding:"2rem 4rem 0",height:"100%"}}>
      <div >
        <h4 className="verticalStepper__heading">Let's help each other to </h4>
        <h3 className="verticalStepper__heading-bold">Find Accomodation</h3>
      </div>

      {stepsList}
    </MainContainer>
  );
}

export default VerticalStepper;
