import React, { useState } from "react";
import App from "../../App";
import VolunteerStepInfo from "../volunteerMultiStepForm/volunteerStepInfo/volunteerStepInfo";
import RequirementStepInfo from "../requirementMultiStepForm/requirementStepInfo/reqirementStepInfo";

export const MultiStepContext = React.createContext();

const StepContext = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [reqCurrentIndex, setReqCurrentIndex] = useState(1);
  const [greenTick, setGreenTick] = useState(0);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [requirementData, setRequirementData] = useState([{ accTypeId: 1 }]);
  const [availableAccommodations, setAvailableAccommodations] = useState([]);
 
  let user = "gurnoor";

  function previous() {
    if (currentIndex > 0) {
      setCurrentIndex((currentIndex) => currentIndex - 1);
      setGreenTick((greenTick) => greenTick - 1);
    } else {
      return currentIndex;
    }
  }
  
  function next() {
    if (currentIndex < VolunteerStepInfo.length) {
      
      setCurrentIndex((currentIndex) => currentIndex + 1);
      setGreenTick((greenTick) => greenTick + 1);

    } else {
      return currentIndex;
    }
  }

  function submitForm() {
    console.log(userData);
  }

  function reqPrevious() {
    if (reqCurrentIndex > 0) {
      setReqCurrentIndex((reqCurrentIndex) => reqCurrentIndex - 1);
      setGreenTick((greenTick) => greenTick - 1);
    } else {
      return reqCurrentIndex;
    }
  }
  function reqNext() {
    if (reqCurrentIndex < RequirementStepInfo.length) {
      setReqCurrentIndex((reqCurrentIndex) => reqCurrentIndex + 1);
      setGreenTick((greenTick) => greenTick + 1);
    } else {
      return reqCurrentIndex;
    }
  }

  return (
    <MultiStepContext.Provider
      value={{
        setReqCurrentIndex,
        currentIndex,
        reqCurrentIndex,
        setCurrentIndex,
        reqNext,
        reqPrevious,
        previous,
        next,
        userData,
        setUserData,
        finalData,
        setFinalData,
        submitForm,
        greenTick,
        setCurrentUser,
        currentUser,
        user,
        requirementData,
        setRequirementData,
        availableAccommodations,
        setAvailableAccommodations,
        setGreenTick
      }}
    >
      {children}
    </MultiStepContext.Provider>
  );
};

export default StepContext;
