import React, { useContext } from "react";
import VolunteerStepInfo from "../volunteerMultiStepForm/volunteerStepInfo/volunteerStepInfo.js";
import RequirementStepInfo from "../requirementMultiStepForm/requirementStepInfo/reqirementStepInfo.js"
import { MultiStepContext } from "../stepContext/stepContext.js";
import "./horizontalStepper.css"

function HorizontalStepper(props) {
  const { currentIndex ,reqCurrentIndex } = useContext(MultiStepContext);
  const currentStep = VolunteerStepInfo[currentIndex-1];
  const reqCurrentStep = RequirementStepInfo[reqCurrentIndex -1 ];
  function currentWidth (index){
    if (props.call === "volunteer")
    return `${(index/5)*100}%`
    else 
    return `${(index/3)*100}%`

  }

  return (
    <>
     {props.call === "volunteer" ?
     <div className="container d-flex d-sm-none">
        <div className="row" style={{width:"100vw"}}>
          <div className="col-12" style={{marginLeft:"1rem"}}>
            <p className="step" style={{marginBottom:"0.125rem"}}>
              Step {currentStep.step}/ {VolunteerStepInfo.length}
            </p>
          </div>
          <div className="col-12" style={{marginLeft:"1rem"}}>
            <p className="step-heading" style={{marginBottom:"0"}}>{currentStep.title}</p>
          </div>
          <div className="col-12" style={{marginTop:"1rem"}}>
            <div class="progress w-100" >
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: currentWidth(currentIndex)}}
                ariaValuenow="25"
                ariaValuemin="0"
                ariaValuemax="100"
              ></div>
            </div>
           
          </div>
          <div className="col" style={{marginTop:"1.25rem"}}>
            <p className="step-description">{currentStep.description}</p>
          </div>
        </div>
      </div> :
      <div className="container d-flex d-sm-none" style={{padding:"0"}}>
        <div className="row" style={{width:"100vw"}}>
          <div className="col-12" style={{marginLeft:"1rem"}}>
            <p className="step" style={{marginBottom:"0.125rem"}}>
              Step {reqCurrentStep.step}/ {RequirementStepInfo.length}
            </p>
          </div>
          <div className="col-12" style={{marginLeft:"1rem"}}>
            <p className="step-heading" style={{marginBottom:"0"}}>{reqCurrentStep.title}</p>
          </div>
          <div className="col-12" style={{marginTop:"1rem"}}>
            <div class="progress" >
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: currentWidth(reqCurrentIndex)}}
                ariaValuenow="25"
                ariaValuemin="0"
                ariaValuemax="100"
              ></div>
            </div>
            
          </div>
          <div className="col" style={{marginTop:"1.25rem"}}>
            <p className="step-description">{reqCurrentStep.description}</p>
          </div>
        </div>
      </div>

     }
      


      
    </>
  );
}

export default HorizontalStepper;
