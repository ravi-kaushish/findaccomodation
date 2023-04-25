import React, { useContext, useEffect } from "react";
import "./verticalStepper.css";
import {
  MainContainer,
  StepContainer,
  Title,
  Description,
} from "./verticalStepperStyle";
import VolunteerStepInfo from "../volunteerMultiStepForm/volunteerStepInfo/volunteerStepInfo";
import RequirementStepInfo from "../requirementMultiStepForm/requirementStepInfo/reqirementStepInfo";
import { MultiStepContext } from "../stepContext/stepContext";
import ReqStepHeader from "../requirementMultiStepForm/reqStepHeader/reqStepHeader";
import VolunteerStepHeader from "../volunteerMultiStepForm/volunteerStepHeader/volunteerStepHeader";
import GreenTick from "../../images/greenTick.svg";

function VerticalStepper(props) {
  const [callf, setCall] = React.useState(props.call);

  let element = null;

  console.log(props.call);
  const { currentIndex, reqCurrentIndex ,greenTick} = useContext(MultiStepContext);
  const stepsList = VolunteerStepInfo.map((currentStep) => (
    <StepContainer
      key={currentStep.step}
      className={
        currentStep.step == currentIndex ? "verticalStepper__active d-flex justify-content-between" : "d-flex justify-content-between"
      }
    >
      <div  style={{ margin: "3% 4%" }}>
        <Title className="verticalStepper__heading">
          Step {currentStep.step}. {currentStep.title}
        </Title>
        <Description style={{ color: "black" }}>
          {currentStep.description}
        </Description>
        
      </div>
       { currentStep.step <= greenTick ? <img src={GreenTick} style={{marginRight:"1rem"}}/>: "" } 

      
    </StepContainer>
  ));

  const requirmentList = RequirementStepInfo.map((currentStep) => (
    <StepContainer
      key={currentStep.step}
      className={
        currentStep.step == reqCurrentIndex
          ? "verticalStepper__active d-flex justify-content-between"
          : "d-flex justify-content-between"
      }
    >
      <div style={{ margin: "3% 4%" }}>
        <Title>
          Step {currentStep.step}. {currentStep.title}
        </Title>
        <Description style={{ color: "black" }}>
          {currentStep.description}
        </Description>
      </div>
      { currentStep.step <= greenTick ? <img src={GreenTick} style={{marginRight:"1rem"}}/>: "" } 
    </StepContainer>
  ));

  if (callf === "isRequirement") {
    element = requirmentList;
  } else element = stepsList;

  return (
    <MainContainer style={{ padding: "2rem 15% 0", height: "100%" }}>
      {callf === "isRequirement" ? <ReqStepHeader /> : <VolunteerStepHeader />}
      {element}
    </MainContainer>
  );
}

export default VerticalStepper;
