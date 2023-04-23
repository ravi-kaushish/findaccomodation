import React,{useState} from "react";
import App from "../../App";
import VolunteerStepInfo from "../volunteerMultiStepForm/volunteerStepInfo/volunteerStepInfo";
import RequirementStepInfo from "../requirementMultiStepForm/requirementStepInfo/reqirementStepInfo";

export const MultiStepContext = React.createContext();

const StepContext = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [reqCurrentIndex,setReqCurrentIndex] = useState(1);
  const [userData,setUserData] = useState([]);
  const [finalData,setFinalData] =useState([]); 

  function previous() {
    if (currentIndex > 0)
      return setCurrentIndex((currentIndex) => currentIndex - 1);
    return currentIndex;
  }
  function next() {
    if (currentIndex < VolunteerStepInfo.length )
      return setCurrentIndex((currentIndex) => currentIndex + 1);  
    return currentIndex;
  }

  function submitForm(){
    console.log(userData)
  }

  function reqPrevious() {
    if (reqCurrentIndex > 0)
      return setReqCurrentIndex((reqCurrentIndex) => reqCurrentIndex - 1);
    return reqCurrentIndex;
  }
  function reqNext() {
    if (reqCurrentIndex < RequirementStepInfo.length )
      return setReqCurrentIndex((reqCurrentIndex) => reqCurrentIndex + 1);  
    return reqCurrentIndex;
  }

  

  return (
    <MultiStepContext.Provider
      value={{ setReqCurrentIndex,currentIndex,reqCurrentIndex,setCurrentIndex, reqNext,reqPrevious , previous, next,userData,setUserData,finalData,setFinalData,submitForm }}
    >
      <App />
    </MultiStepContext.Provider>
  );
};

export default StepContext;
