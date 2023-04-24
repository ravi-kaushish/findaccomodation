import React, { useContext } from "react";
import VolunteerStepInfo from "../volunteerMultiStepForm/volunteerStepInfo/volunteerStepInfo.js";
import { MultiStepContext } from "../stepContext/stepContext.js";

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
          <div className="col-12">
            <p>
              Step {currentStep.step}/ {VolunteerStepInfo.length}
            </p>
          </div>
          <div className="col-12">
            <p>{currentStep.title}</p>
          </div>
          <div className="col-12">
            <div class="progress w-100">
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
        </div>
      </div>
    </>
  );
}

export default HorizontalStepper;
