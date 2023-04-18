import React,{useState} from "react";
import App from "../../App";
import VolunteerStepInfo from "../volunteerMultiStepForm/volunteerStepInfo/volunteerStepInfo";

export const MultiStepContext = React.createContext();

const StepContext = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
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

  return (
    <MultiStepContext.Provider
      value={{ currentIndex, setCurrentIndex, previous, next,userData,setUserData,finalData,setFinalData,submitForm }}
    >
      <App />
    </MultiStepContext.Provider>
  );
};

export default StepContext;
