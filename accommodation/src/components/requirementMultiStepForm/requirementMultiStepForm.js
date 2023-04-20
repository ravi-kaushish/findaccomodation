import React from "react";
import VerticalStepper from "../verticalStepper/verticalStepper";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import Navbar from "../navbar/navbar";
import styled from "styled-components";
import ReqStep1 from "./reqStep1/reqStep1";
import ReqStep2 from "./reqStep2/reqStep2";
import ReqStep3 from "./reqStep3/reqStep3";

const RequirementMultiStepForm = () => {

  const [call , setCall] = React.useState("isRequirement");

    const PageContainer = styled.div`
    @media (min-width:1240px){
        width:1240px;
       
    }
    `;
   
    
  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <PageContainer className="container-fluid" style={{ padding:"0", height: "100vh" }}>
            <div className="row" style={{width:"100%",height:"100vh"}}>
              <div className="col-5">
                <VerticalStepper call={call} />
              </div>
              <div className="col-7" style={{padding:"0"}}>
              {/* <ReqStep1 /> */}
              <ReqStep3 />
                
              </div>
            </div>
          </PageContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default RequirementMultiStepForm;
