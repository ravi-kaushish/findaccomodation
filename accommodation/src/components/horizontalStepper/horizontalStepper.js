import React, { useContext } from "react";
import VolunteerStepInfo from "../volunteerMultiStepForm/volunteerStepInfo/volunteerStepInfo.js";
import { MultiStepContext } from "../stepContext/stepContext.js";
import "./horizontalStepper.css"

function HorizontalStepper() {
  const { currentIndex } = useContext(MultiStepContext);
  const currentStep = VolunteerStepInfo[currentIndex-1];
  function currentWidth (index){
    return `${(index/5)*100}%`

  }

  return (
    <>
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
            {console.log(currentWidth)}
          </div>
          <div className="col" style={{marginTop:"1.25rem"}}>
            <p className="step-description">{currentStep.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HorizontalStepper;
